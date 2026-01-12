// Import Injectable decorator to mark this class as a service
import { Injectable } from '@angular/core';

// Import BehaviorSubject from RxJS for state management
import { BehaviorSubject } from 'rxjs';

// Marks this class as injectable and available application-wide
@Injectable({
  providedIn: 'root' // Creates a singleton service shared across the app
})
export class CarService {

  // Constructor (no dependencies injected here)
  constructor() { }

  // Private BehaviorSubject that holds the current list of car names
  // Initial value is an empty array
  private carNamesSubject = new BehaviorSubject<string[]>([]);

  // Public observable exposed to components
  // Components can subscribe but cannot modify the data
  carNames$ = this.carNamesSubject.asObservable();

  // Method to add a new car name to the list
  addCarName(name: string) {

    // Get the current value (array of car names) from BehaviorSubject
    const currentNames = this.carNamesSubject.getValue();

    // Create a new array by copying existing names and adding the new one
    // This ensures immutability (do not modify original array)
    const updatedNames = [...currentNames, name];

    // Emit the updated array so all subscribers receive the new data
    this.carNamesSubject.next(updatedNames);
  }
}
