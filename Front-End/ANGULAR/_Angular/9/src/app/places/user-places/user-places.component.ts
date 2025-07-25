import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { map, catchError, throwError, interval } from 'rxjs';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  isFetching = signal(false);
  errorMsg = signal('');
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);
  places = this.placesService.loadedUserPlaces;


  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.placesService.loadUserPlaces()
    .subscribe({
      next: (places) => {
        console.log(places)
      },
      error: (error: Error) => {
        this.errorMsg.set(error.message);
      },
      complete: () => {
          this.isFetching.set(false)
      }
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }

  onDeletePlace(place: Place){
    const sub = this.placesService.removeUserPlace(place).subscribe();

    this.destroyRef.onDestroy(() => {
      sub.unsubscribe();
    })
  }
}
