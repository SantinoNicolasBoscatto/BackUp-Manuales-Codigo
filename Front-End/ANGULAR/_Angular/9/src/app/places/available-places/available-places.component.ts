import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  private destroyRef = inject(DestroyRef);

  isFetching = signal(false);
  errorMsg = signal('');
  private placesService = inject(PlacesService);
  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription =  this.placesService.loadAvailablePlaces().subscribe({
      next: (places) => {
        this.places.set(places);
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


  onSelectPlace(place: Place){
    const sub = this.placesService.addPlaceToUserPlaces(place).subscribe();

    this.destroyRef.onDestroy(() => {
      sub.unsubscribe();
    })
  }
}
