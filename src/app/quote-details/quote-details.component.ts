import { QuotesService } from './../../services/quotes/quotes.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { Quote } from 'src/models/quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.scss']
})
export class QuoteDetailsComponent implements OnInit {
  selectedQuote: any;
  @Input() character: any;
  constructor(private QuotesService: QuotesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getInitialQuoteId();
    this.quoteListener()
    console.log();
  }
  private getInitialQuoteId() {
    const id = this.route.snapshot.params.id;
    this.selectedQuote = this.QuotesService.getQuote(Number(id));
  }
  private quoteListener() {
    this.route.paramMap
      .pipe(
        concatMap((params: ParamMap) => {
          if (!params.get("id")) {
            return of(null);
          }
          return this.QuotesService.getQuote(Number(params.get("id")));
        })
      )}

}


