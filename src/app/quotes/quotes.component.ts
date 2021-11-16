import { QuoteFormComponent } from './../quote-form/quote-form.component';
import { QuotesCountService } from './../../services/quotes-count/quotes-count.service';
import { QuotesService } from '../../services/quotes/quotes.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Quote } from 'src/models/quote';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit, OnChanges {
  quotes!: Quote[];
  changeMode = false;
  selectedId!: number;
  //unsubscribe$: Subject<void> = new Subject<void>();
  constructor( private QuotesService: QuotesService, private QuotesCountService: QuotesCountService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.getAllQuotes();
    this.updateCountOfQuotes();
  }

  ngOnInit() {
    this.getAllQuotes();
  }
  private getAllQuotes() {
    this.QuotesService.getAllQuotes().subscribe((quotes) => {
      this.quotes = quotes;
      this.updateCountOfQuotes();
    });
  }
  changeFormMode(){
    this.changeMode = !this.changeMode;
  }
  updateCountOfQuotes() {
    const count = this.quotes.length;
    this.QuotesCountService.updateCountOfQuotes(count);
  }
  QuoteSelected(id: number) {
    this.selectedId = id;
  }
  
}
