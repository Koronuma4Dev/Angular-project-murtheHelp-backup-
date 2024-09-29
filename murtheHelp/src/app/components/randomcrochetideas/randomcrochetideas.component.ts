import { Component } from '@angular/core';

@Component({
  selector: 'app-randomcrochetideas',
  templateUrl: './randomcrochetideas.component.html',
  styleUrl: './randomcrochetideas.component.css'
})
export class RandomcrochetideasComponent {
  crochetProjects: string[] = [
    'Crochet blanket',
    'Amigurumi stuffed animal',
    'Crochet hat',
    'Crochet scarf',
    'Crochet coasters',
    'Crochet baby booties',
    'Crochet tote bag',
    'Crochet plant hanger',
    'Crochet pillow cover',
    'Crochet dishcloth',
    'Crochet mouse pad',
    'Crochet Bandana'
  ];

  randomProjects: string = '';

  generateRandomcrochet() {
    const randomIndex = Math.floor(Math.random() * this.crochetProjects.length);
    this.randomProjects = this.crochetProjects[randomIndex];
  }
}
