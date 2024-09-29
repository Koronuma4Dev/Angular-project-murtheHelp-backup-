import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CurrencyconverterComponent } from './components/currencyconverter/currencyconverter.component';
import { DisplayhelloworldComponent} from './components/displayhelloworld/displayhelloworld.component';
import { DisplaynameComponent } from './components/displayname/displayname.component';
import { EvenoddcheckerComponent} from './components/evenoddchecker/evenoddchecker.component';
import { MultiplicationtableComponent } from './components/multiplicationtable/multiplicationtable.component';
import { ShowdateComponent } from './components/showdate/showdate.component'; 
import { ShowhellobuttonComponent } from './components/showhellobutton/showhellobutton.component'; 
import { ShowusernameComponent } from './components/showusername/showusername.component'; 
import { SimpleformComponent } from './components/simpleform/simpleform.component'; 
import { SimpleloginComponent } from './components/simplelogin/simplelogin.component'; 
import { TextlengthComponent } from './components/textlength/textlength.component'; 
import { WordreverseComponent } from './components/wordreverse/wordreverse.component'; 
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CounterComponent } from './components/counter/counter.component';
import { UserageComponent } from './components/userage/userage.component';
import { UsergreetingComponent } from './components/usergreeting/usergreeting.component';
import { FahrenheittocelsiusComponent } from './components/fahrenheittocelsius/fahrenheittocelsius.component';
import { BookmarklistComponent } from './components/bookmarklist/bookmarklist.component';
import { CharactercounterComponent } from './components/charactercounter/charactercounter.component';
import { TemperatureconverterComponent } from './components/temperatureconverter/temperatureconverter.component';
import { TodomanagerComponent } from './components/todomanager/todomanager.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { FactorialcalculatorComponent } from './components/factorialcalculator/factorialcalculator.component';
import { GuessnumbergameComponent } from './components/guessnumbergame/guessnumbergame.component';
import { PalindromeComponent } from './components/palindrome/palindrome.component';
import { WordcounterComponent } from './components/wordcounter/wordcounter.component';
import { RandomnumbergeneratorComponent } from './components/randomnumbergenerator/randomnumbergenerator.component';
import { WordshufflerComponent } from './components/wordshuffler/wordshuffler.component';
import { UppercaseconverterComponent } from './components/uppercaseconverter/uppercaseconverter.component';
import { BmisolverComponent } from './components/bmisolver/bmisolver.component';
import { UsernamevalidatorComponent } from './components/usernamevalidator/usernamevalidator.component';
import { InterestcalculatorComponent } from './components/interestcalculator/interestcalculator.component';
import { CompoundinterestcalculatorComponent } from './components/compoundinterestcalculator/compoundinterestcalculator.component';
import { FibonaccigeneratorComponent } from './components/fibonaccigenerator/fibonaccigenerator.component';
import { OddsumcalculatorComponent } from './components/oddsumcalculator/oddsumcalculator.component';
import { RandomquotedisplayComponent } from './components/randomquotedisplay/randomquotedisplay.component';
import { UppercasegreetingComponent } from './components/uppercasegreeting/uppercasegreeting.component';
import { DivisiblecheckerComponent } from './components/divisiblechecker/divisiblechecker.component';
import { FlashcardsAppComponent } from './components/flashcards-app/flashcards-app.component';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { MovielistappComponent } from './components/movielistapp/movielistapp.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { RandomletterComponent } from './components/randomletter/randomletter.component';
import { RandomcrochetideasComponent } from './components/randomcrochetideas/randomcrochetideas.component';
import { PlaylistlistComponent } from './components/playlistlist/playlistlist.component';
import { ExpensetrackerComponent } from './components/expensetracker/expensetracker.component';
import { TableofElementsComponent } from './components/tableof-elements/tableof-elements.component';
import { ProbabilityTestComponent } from './components/probability-test/probability-test.component';

const routes: Routes = [
  {path:'' , component:NavigationBarComponent}, 
  {path:'calculator' , component:CalculatorComponent},
  {path:'counter' , component:CounterComponent},
  {path:'currencyconverter' , component:CurrencyconverterComponent},
  {path:'displayhelloworld' , component:DisplayhelloworldComponent},
  {path:'displayname' , component:DisplaynameComponent},
  {path:'evenoddchecker' , component:EvenoddcheckerComponent},
  {path:'multiplicationtable' , component:MultiplicationtableComponent},
  {path:'showdate' , component:ShowdateComponent},
  {path:'showhellobutton' , component:ShowhellobuttonComponent},
  {path:'showusername' , component:ShowusernameComponent},
  {path:'simpleform' , component:SimpleformComponent},
  {path:'simplelogin' , component:SimpleloginComponent},
  {path:'textlength' , component:TextlengthComponent},
  {path:'wordreverse' , component:WordreverseComponent},
  {path:'userage' , component:UserageComponent},
  {path:'usergreeting' , component:UsergreetingComponent},
  {path:'fahrenheittocelsius' , component:FahrenheittocelsiusComponent},
  {path:'bookmarklist' , component: BookmarklistComponent},
  {path:'charactercounter' , component:CharactercounterComponent},
  {path:'temperatureconverter' , component:TemperatureconverterComponent},
  {path:'shoppinglist' , component:ShoppinglistComponent},
  {path:'factorialcalculator' , component:FactorialcalculatorComponent},
  {path:'todomanager' , component:TodomanagerComponent},
  {path:'guessnumbergame' , component:GuessnumbergameComponent},
  {path:'palindrome' , component:PalindromeComponent},
  {path:'randomnumbergenerator', component:RandomnumbergeneratorComponent},
  {path:' wordshuffler', component:WordshufflerComponent},
  {path:'bmisolver', component:BmisolverComponent},
  {path:'usernamevalidator', component:UsernamevalidatorComponent},
  {path:'interestcalculator', component:InterestcalculatorComponent},
  {path:'compoundinterestcalculator', component:CompoundinterestcalculatorComponent},
  {path:'fibonaccigenerator', component:FibonaccigeneratorComponent},
  {path:'oddsumcalculator', component:OddsumcalculatorComponent},
  {path:'currencyformatter', component:CurrencyconverterComponent},
  {path:'randomquotedisplay', component:RandomquotedisplayComponent},
  {path:'uppercasegreeting', component:UppercasegreetingComponent},
  {path:'divisiblechecker', component:DivisiblecheckerComponent},
  {path:'wordcounter', component:WordcounterComponent},
  {path:'wordshuffler', component:WordshufflerComponent},
  {path:' uppercaseconverter', component:UppercaseconverterComponent},
  {path:'FlashcardsApp', component:FlashcardsAppComponent},
  {path:'RecipeBook', component:RecipeBookComponent},
  {path:'Movielistapp', component:MovielistappComponent},
  {path:'ImageGallery', component:ImageGalleryComponent},
  {path:'randomletter', component:RandomletterComponent},
  {path:'randomcrochetideas', component:RandomcrochetideasComponent},
  {path:'playlistlist', component:PlaylistlistComponent},
  {path:'expensetracker', component:ExpensetrackerComponent},
  {path:   'TableofElements'   ,component:TableofElementsComponent},
  {path:   'ProbabilityTest'   ,component:ProbabilityTestComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
