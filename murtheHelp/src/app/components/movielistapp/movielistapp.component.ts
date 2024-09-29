import { Component } from '@angular/core';

@Component({
  selector: 'app-movielistapp',
  templateUrl: './movielistapp.component.html',
  styleUrl: './movielistapp.component.css'
})
export class MovielistappComponent {
  movieList: string[] = ['Inception', 'The Matrix', 'Interstellar'];

 
  addMovie(movieInput: HTMLInputElement) {
    const movie = movieInput.value.trim();
    if (movie) {
      this.movieList.push(movie);
      movieInput.value = ''; 
    }
  }


  removeMovie(index: number) {
    this.movieList.splice(index, 1);
  }
}
