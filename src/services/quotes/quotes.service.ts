import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Quote } from "src/models/quote";

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  url = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  getQuote(id: number): Observable<any> {
    return this.http.get(`${this.url}/quote/${id}`);
  }
  getAllQuotes(): Observable<any> {
    return this.http.get(`${this.url}/quotes`);
  }
  addQuote(quote: Quote): Observable<any> {
    return this.http.post(`${this.url}/quotes`, quote);
  }
}
