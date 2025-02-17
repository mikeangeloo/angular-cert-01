import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieItemComponent } from './movie-item.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

// Dummy movie data based on the checklist
const sampleMovie = {
  title: "Harry Potter and the Philosopher's Stone",
  release_date: '2001-11-04',
  budget: 125,
  duration: 152,
};

@Component({
  selector: 'app-host-component',
  template: '<app-movie-item [movie]="movie"></app-movie-item>',
  imports: [MovieItemComponent],
  standalone: false,
})
class TestHostComponent {
  movie = sampleMovie;
}

describe('MovieItemComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [MovieItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the movie title correctly', () => {
    const titleElement = fixture.debugElement.query(
      By.css('[data-test="movie-title"]')
    );
    expect(titleElement.nativeElement.textContent).toContain(sampleMovie.title);
  });

  it('should render the release date correctly', () => {
    const releaseDateElement = fixture.debugElement.query(
      By.css('[data-test="movie-release-date"]')
    );
    expect(releaseDateElement.nativeElement.textContent).toContain(
      '2001-11-04'
    );
  });

  it('should render the budget correctly', () => {
    const budgetElement = fixture.debugElement.query(
      By.css('[data-test="movie-budget"]')
    );
    expect(budgetElement.nativeElement.textContent).toContain('$ 125 million');
  });

  it('should render the duration correctly', () => {
    const durationElement = fixture.debugElement.query(
      By.css('[data-test="movie-duration"]')
    );
    expect(durationElement.nativeElement.textContent).toContain('152 min');
  });
});
