import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { map, catchError, throwError, tap } from 'rxjs';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpClient = inject(HttpClient);
  private userPlaces = signal<Place[]>([]);
  private errorService = inject(ErrorService);
  loadedUserPlaces = this.userPlaces.asReadonly();

  
  loadAvailablePlaces() {
    return this.fetchPlaces('http://localhost:3000/places', 
      'Algo fue mal con los lugares disponibles');
  } 
  loadUserPlaces() {
    return this.fetchPlaces('http://localhost:3000/user-places', 
      'Algo fue mal con los lugares favoritos')
      // El Operador tap sirve para ejecutar algun codigo que quisiera ejecutar en la suscripcion pero sin suscribirme
      .pipe(tap({
        next: (userPlaces) => this.userPlaces.set(userPlaces)
      }))
  }

  addPlaceToUserPlaces(place: Place) {
    return this.httpClient.put('http://localhost:3000/user-places', {placeId: place.id})
    .pipe(tap({
      next: () => {
        if(this.userPlaces().some((p) => p.id === place.id)) throw new Error('Elemento Repetido Pa');
        this.userPlaces.update(oldValues => [...oldValues, place]);
      },
      error: (err) => this.errorService.showError('Place cant be saved. Please Try Again!')
    }))
  }

  removeUserPlace(place: Place) {
    return this.httpClient.delete(`http://localhost:3000/user-places/${place.id}`)
    .pipe(tap({
      next: () => {
        if(!(this.userPlaces().some((p) => p.id === place.id))) throw new Error('Este elemento no existe');
        this.userPlaces.update(oldValues => [...oldValues].filter(x => x.id !== place.id));
      },
      error: (err) => this.errorService.showError('Place cant be saved. Please Try Again!')
    }))
  }

  private fetchPlaces(url: string, errorMessage: string){
    return this.httpClient.get<{places: Place[]}>(url)
    .pipe(
      map((resData) => resData.places), 
      catchError((err) => {
        console.log(err);
        return throwError(() => new Error(errorMessage)) // throwError() devuelve un Observable
      }) 
    )   
  }
}
