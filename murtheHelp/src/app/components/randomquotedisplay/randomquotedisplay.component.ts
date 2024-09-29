import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomquotedisplayComponent {
  quotes: string [] =[
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Your time is limited, so don't waste it living someone else's life.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The purpose of our lives is to be happy.",
    "Sometimes, the enemy of a person is their own fear",
    "The country's problem cannot be solved by a single family",
    "It’s hard to force your will on others, especially if their minds are closed",
    "Love is like war: painful, but worth fighting for",
    "People don't learn because they don't observe, they don't listen",
    "True freedom is freedom from fear.",
    "Some people are lucky, some are not. But you're luckier if you know yourself",
    
  

  ]

  quote:string ='';

  showRandomQuote(){
    this.quote=this.quotes[Math.floor(Math.random() * this.quotes.length)]
  }

  

}
