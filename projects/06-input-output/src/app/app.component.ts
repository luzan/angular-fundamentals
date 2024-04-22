import { Component, Input } from '@angular/core';
import { Car } from './car';
import { ListingComponent } from './listing/listing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListingComponent],
  template: `
    <h1>Saved Cars {{ savedCarList.length }}</h1>
    <section class="container">
      <!-- This article element represents and entire listing -->
      @for(carEntry of carList; track carEntry) {
        <app-listing [car]="carEntry" (carSaved)="addCarToSaved($event)" />
      } @empty {
        <p>No cars available</p>
      }
      <!-- end car listing markup -->
    </section>
    <section class="container">
      @for(savedCar of savedCarList; track savedCar) {
        <p>{{ savedCar.make }} {{ savedCar.model }}</p>
      } @empty {
        <p>No saved cars</p>
      }
    </section>
  `,
  styles: [],
})
export class AppComponent {
  savedCarList: Car[] = [];
  carList: Car[] = [
    {
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];

  addCarToSaved(car: Car) {
    this.savedCarList.push(car);
  }
}
