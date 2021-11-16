import { QuotesService } from './../../services/quotes/quotes.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { QuotesCountService } from 'src/services/quotes-count/quotes-count.service';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Quote } from 'src/models/quote';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnChanges {
  quotesLength?: number;
  count?: number;
  quotes!: Quote[];
  constructor(private QuotesService: QuotesService,  private QuotesCountService: QuotesCountService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.updateCountOfQuotes();
    this.getAllQuotes();
  }
 

  ngOnInit(): void {
    this.QuotesListener();
  }
  private QuotesListener() {
    this.QuotesCountService.quotesCount$
    .subscribe((count) => {
      this.count = count;
    }); }
    
    updateCountOfQuotes() {
      const count = this.quotes.length;
      this.QuotesCountService.updateCountOfQuotes(count);
    }
    private getAllQuotes() {
      this.QuotesService.getAllQuotes().subscribe((quotes) => {
        this.quotes = quotes;
        this.updateCountOfQuotes();
      });
    }
  
}
