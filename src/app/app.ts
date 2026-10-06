import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PipesDemoComponent } from './pipes-demo-component/pipes-demo-component';

@Component({
  imports: [RouterOutlet, PipesDemoComponent, CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pipes-demo');
}
