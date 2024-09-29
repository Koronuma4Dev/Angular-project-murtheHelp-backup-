import { Component } from '@angular/core';

@Component({
  selector: 'app-playlistlist',
  templateUrl: './playlistlist.component.html',
  styleUrl: './playlistlist.component.css'
})
export class PlaylistlistComponent {
  playlistList: string[] = ['Workout Playlist', 'Chill Vibes', 'Road Trip Tunes', 'Sunday morning', 'Study kind of vibe', 'Banger'];

  
  addPlaylist(playlistInput: HTMLInputElement) {
    const playlist = playlistInput.value.trim();
    if (playlist) {
      this.playlistList.push(playlist);
      playlistInput.value = ''; 
    }
  }

  removePlaylist(index: number) {
    this.playlistList.splice(index, 1);
  }
}
