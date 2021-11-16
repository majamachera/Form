import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuotesCountService {
  quotesCount$: Subject<number> = new Subject<number>();
  constructor() {}

  updateCountOfQuotes(count: number) {
    this.quotesCount$.next(count);
  }
}
