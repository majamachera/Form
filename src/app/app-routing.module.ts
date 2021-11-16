import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { PostersComponent } from './posters/posters.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';

const routes: Routes = [
   {
     path: "quotes",
     component: QuotesComponent,
     children: [{ path: ":id", component: QuoteDetailsComponent }],
   },
   { path: "home", component: ListComponent },
   { path: "posters", component: PostersComponent },
   { path: "", component: ListComponent, pathMatch: "full" },
   { path: "**", component: NotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
