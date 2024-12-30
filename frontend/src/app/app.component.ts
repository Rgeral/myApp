import { Component } from '@angular/core';
import { TestComponent } from './components/test/test.component'; // Chemin vers TestComponent
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TestComponent],
  template: `
    <h1>Bienvenue dans AppComponent</h1>
    <app-test></app-test> <!-- Utilisation de TestComponent -->
  `,
})
export class AppComponent {}
