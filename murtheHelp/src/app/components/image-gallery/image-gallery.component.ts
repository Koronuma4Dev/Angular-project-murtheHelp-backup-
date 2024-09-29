import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css'
})
export class ImageGalleryComponent {
  imageList: string[] = [
   'https://ph.pinterest.com/pin/14918242510099249/'
  ];

  
  addImage(inputElement: HTMLInputElement) {
    const imageUrl = inputElement.value.trim();
    if (imageUrl) {
      this.imageList.push(imageUrl);
      inputElement.value = ''; 
    }
  }
}
