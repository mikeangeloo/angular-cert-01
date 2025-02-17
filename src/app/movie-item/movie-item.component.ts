import { Component, Input } from '@angular/core';
import { Movie } from '../model/movie.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-item',
  template: `
    <div class="movie-item" *ngIf="movie">
      <div>
        <h4 data-test="movie-title">{{ movie.title }}</h4>
        <small class="subtitle">
          <span data-test="movie-release-date"
            >Release date: {{ movie.release_date }}</span
          >
        </small>
        <small class="subtitle">
          <span data-test="movie-budget"
            >Budget: $ {{ movie.budget }} million</span
          >
        </small>
        <small class="subtitle">
          <span data-test="movie-duration"
            >Duration: {{ movie.duration }} min</span
          >
        </small>
      </div>
      <button>Details</button>
    </div>
  `,
  standalone: true,
  styleUrls: ['movie-item.component.scss'],
  imports: [CommonModule],
})
export class MovieItemComponent {
  @Input() movie: Movie;
}
