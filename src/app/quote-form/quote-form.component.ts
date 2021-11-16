
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Quote } from 'src/models/quote';
import { QuotesService } from '../../services/quotes/quotes.service';
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";



@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit {
  quotes?: Quote[];

  unsubscribe$: Subject<void> = new Subject<void>();
  @Output() changeModes = new EventEmitter<any>();
  constructor( private QuotesService: QuotesService) { }
  form = new FormGroup({
   
    quote: new FormControl('',Validators.required),
    character: new FormControl('',Validators.required,),
  });
  ngOnInit(): void {
  }
  
  onSubmit(){
 
    this.QuotesService.addQuote(this.form.value).subscribe(() => {
      // First approach
      // this.books.push(book);

      //Second, make a call for all books
      this.getAllQuotes();
      this.formListener()
     
    
    
  });
  this.changeModes.emit(false)
  }
  private getAllQuotes() {
    this.QuotesService.getAllQuotes().subscribe((quotes) => {
      this.quotes = quotes;
      //this.updateCountOfQuotes();
    });
}

formListener() {
  this.form.valueChanges
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((value) => {
       console.log(value);
    });
}

}
