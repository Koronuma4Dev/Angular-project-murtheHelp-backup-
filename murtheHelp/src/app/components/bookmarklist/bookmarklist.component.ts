import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarklist',
  templateUrl: './bookmarklist.component.html',
  styleUrl: './bookmarklist.component.css'
})
export class BookmarklistComponent {
  urlInputValue: string = ''; 
  urlList: string[] = [];     

  
  onUrlInput(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.urlInputValue = input;
  }

  
  addUrl(): void {
    if (this.isValidUrl(this.urlInputValue)) {
      this.urlList.push(this.urlInputValue);
      this.urlInputValue = ''; 
    } else {
      alert('Please enter a valid URL.');
    }
  }

 
  isValidUrl(url: string): boolean {
    const pattern = new RegExp('^(https?:\\/\\/)?' + 
      '((([a-zA-Z0-9$_.+!*\'(),-]+\\.[a-zA-Z0-9-]+)|' + 
      '([a-zA-Z0-9]+))|' + 
      '\\[?[a-fA-F0-9:.]+\\]?)' + 
      '(\\:[0-9]{1,5})?' + 
      '(\\/.*)?$'); 
    return pattern.test(url);
  }
}
