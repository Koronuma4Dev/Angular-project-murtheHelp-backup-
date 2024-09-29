import { NgModule } from '@angular/core';


import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { DisplayhelloworldComponent } from './components/displayhelloworld/displayhelloworld.component';
import { CounterComponent } from './components/counter/counter.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TextlengthComponent } from './components/textlength/textlength.component';
import { CurrencyconverterComponent } from './components/currencyconverter/currencyconverter.component';
import { EvenoddcheckerComponent } from './components/evenoddchecker/evenoddchecker.component';
import { WordreverseComponent } from './components/wordreverse/wordreverse.component';
import { ShowdateComponent } from './components/showdate/showdate.component';
import { ShowusernameComponent } from './components/showusername/showusername.component';
import { MultiplicationtableComponent } from './components/multiplicationtable/multiplicationtable.component';
import { SimpleloginComponent } from './components/simplelogin/simplelogin.component';
import { ShowhellobuttonComponent } from './components/showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './components/displayname/displayname.component';
import { SimpleformComponent } from './components/simpleform/simpleform.component';
import { UserageComponent } from './components/userage/userage.component';
import { UsergreetingComponent } from './components/usergreeting/usergreeting.component';
import { FahrenheittocelsiusComponent } from './components/fahrenheittocelsius/fahrenheittocelsius.component';
import { BookmarklistComponent } from './components/bookmarklist/bookmarklist.component';
import { TemperatureconverterComponent } from './components/temperatureconverter/temperatureconverter.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { FactorialcalculatorComponent } from './components/factorialcalculator/factorialcalculator.component';
import { TodomanagerComponent } from './components/todomanager/todomanager.component';
import { GuessnumbergameComponent } from './components/guessnumbergame/guessnumbergame.component';
import { WordcounterComponent } from './components/wordcounter/wordcounter.component';
import { RandomnumbergeneratorComponent } from './components/randomnumbergenerator/randomnumbergenerator.component';
import { CharactercounterComponent } from './components/charactercounter/charactercounter.component';
import { PalindromeComponent } from './components/palindrome/palindrome.component';
import { WordshufflerComponent } from './components/wordshuffler/wordshuffler.component';
import { BmisolverComponent } from './components/bmisolver/bmisolver.component';
import { InterestcalculatorComponent } from './components/interestcalculator/interestcalculator.component';
import { FibonaccigeneratorComponent } from './components/fibonaccigenerator/fibonaccigenerator.component';
import { OddsumcalculatorComponent } from './components/oddsumcalculator/oddsumcalculator.component';
import { UppercasegreetingComponent } from './components/uppercasegreeting/uppercasegreeting.component';
import { DivisiblecheckerComponent } from './components/divisiblechecker/divisiblechecker.component';
import { CurrencyformatterComponent } from './components/currencyformatter/currencyformatter.component';
import { CompoundinterestcalculatorComponent } from './components/compoundinterestcalculator/compoundinterestcalculator.component';
import { RandomquotedisplayComponent } from './components/randomquotedisplay/randomquotedisplay.component';
import { UsernamevalidatorComponent } from './components/usernamevalidator/usernamevalidator.component';
import { UppercaseconverterComponent } from './components/uppercaseconverter/uppercaseconverter.component';

import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { FlashcardsAppComponent } from './components/flashcards-app/flashcards-app.component';
import { MovielistappComponent } from './components/movielistapp/movielistapp.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { RandomletterComponent } from './components/randomletter/randomletter.component';
import { RandomcrochetideasComponent } from './components/randomcrochetideas/randomcrochetideas.component';
import { PlaylistlistComponent } from './components/playlistlist/playlistlist.component';
import { ExpensetrackerComponent } from './components/expensetracker/expensetracker.component';

import { TableofElementsComponent } from './components/tableof-elements/tableof-elements.component';
import { ProbabilityTestComponent } from './components/probability-test/probability-test.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
  
    DisplayhelloworldComponent,
    CounterComponent,
    CalculatorComponent,
    TextlengthComponent,
    CurrencyconverterComponent,
    EvenoddcheckerComponent,
    WordreverseComponent,
    ShowdateComponent,
    ShowusernameComponent,
    MultiplicationtableComponent,
    SimpleloginComponent,
    ShowhellobuttonComponent,
    DisplaynameComponent,
    SimpleformComponent,
    UserageComponent,
    UsergreetingComponent,
    FahrenheittocelsiusComponent,
    BookmarklistComponent,
    TemperatureconverterComponent,
    ShoppinglistComponent,
    FactorialcalculatorComponent,
    TodomanagerComponent,
    GuessnumbergameComponent,
    WordcounterComponent,
    RandomnumbergeneratorComponent,
    CharactercounterComponent,
    PalindromeComponent,
    WordshufflerComponent,
    BmisolverComponent,
    InterestcalculatorComponent,
    FibonaccigeneratorComponent,
    OddsumcalculatorComponent,
    UppercasegreetingComponent,
    DivisiblecheckerComponent,
    CurrencyformatterComponent,
    CompoundinterestcalculatorComponent,
    RandomquotedisplayComponent,
    UsernamevalidatorComponent,
    UppercaseconverterComponent,
   
    RecipeBookComponent,
         FlashcardsAppComponent,
         MovielistappComponent,
         ImageGalleryComponent,
         RandomletterComponent,
         RandomcrochetideasComponent,
         PlaylistlistComponent,
         ExpensetrackerComponent,
      
         TableofElementsComponent,
                 ProbabilityTestComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
