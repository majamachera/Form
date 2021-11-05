
import { Component,  OnInit } from '@angular/core';
enum ECategory {
  action = "action",
  sifi = "si-fi",
  horror = "horror",
  thriller = "thriller",
  drama = "drama"
}
interface Video {
  id: number;
  title: string;
  imagePath: string;
  category: ECategory;
  dateAdded: Date;
  production: string;
  amount: number;
  description: string;

}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  DetailsMode = false;
  videoForDetails: any;
  chosenMovieId = 0;
  videos: Video[]=[];
  titles: string[]=["THE PURSUIT OF HAPPYNESS","INCEPTION","THE BUTTERFLY EFFECT", "THE SHINING"];
  paths: string[]=["./assets/7140020.6.jpg", "./assets/7331483.6.jpg",  "./assets/7714886.6.jpg",  "./assets/7477309.6.jpg",]
  categories: ECategory[]=[ECategory.drama, ECategory.sifi, ECategory.thriller, ECategory.horror]
  dates: Date[] = [new Date('December 15, 2006'), new Date('July 08, 2010'), new Date('January 23, 2004'), new Date('May 23, 1980')]
  productions: string[]=["Columbia Pictures Corporation ", "Warner Bros. Pictures", "BenderSpink, FilmEngine", "Warner Bros. Pictures"]
  amounts: number[]=[3,4,7,20]
  descriptions: string[]=["Will Smith stars in this moving tale inspired by the true story of Chris Gardner, a San Francisco salesman struggling to build a future for himself and his 5-year-old son Christopher (Jaden Smith). When his girlfriend Linda (Thandie Newton) walks out, Chris is left to raise Christopher (Jaden Smith) on his own. Chris' determination finally pays off when he lands an unpaid internship in a brutally competitive stockbroker-training program, where only one in twenty interns will make the cut. But without a salary, Chris and his son are evicted from their apartment and are forced to sleep on the streets, in homeless shelters and even behind the locked doors of a metro station bathroom. With self-confidence and the love and trust of his son, Chris Gardner rises above his obstacles to become a Wall Street legend.",
  "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
  "As a child, Evan Treborn was afflicted with blackouts where he would be in one place one minute and then another the next, remembering absolutely nothing in-between. Now all grown up and in college, he decides to read from an old journal he wrote to remember stuff that might have happened in the in-between, and suddenly finds himself back at a certain point in his life. He realizes that those blackouts he had were actually empty spaces of time he had to fill up later in life. Attempting to use this ability to undo unpleasant past events, Evan starts to find that every time he goes back and tries to fix things, he ends up making everything worse. How can he prevent more tragedies from happening and save the one girl he ever loved, Kayleigh (Amy Smart)?",
  "Haunted by a persistent writer's block, the aspiring author and recovering alcoholic, Jack Torrance, drags his wife, Wendy, and his gifted son, Danny, up snow-capped Colorado's secluded Overlook Hotel after taking up a job as an off-season caretaker. As the cavernous hotel shuts down for the season, the manager gives Jack a grand tour, and the facility's chef, the ageing Mr Hallorann, has a fascinating chat with Danny about a rare psychic gift called The Shining, making sure to warn him about the hotel's abandoned rooms, and, in particular, the off-limits Room 237. However, instead of overcoming the dismal creative rut, little by little, Jack starts losing his mind, trapped in an unforgiving environment of seemingly endless snowstorms, and a gargantuan silent prison riddled with strange occurrences and eerie visions. Now, the incessant voices inside Jack's head demand sacrifice. Is Jack capable of murder?"]
 
  constructor() { }
  ngOnInit(): void {
    for (let i = 0; i < this.titles.length; i++) {
      this.videos[i] = {
        id: i+1, title: this.titles[i], imagePath: this.paths[i], category: this.categories[i], dateAdded: this.dates[i], production: this.productions[i], amount: this.amounts[i],
        description: this.descriptions[i]
      }
    }
  }
  public ChangeMode(id: number) {
    this.chosenMovieId = id;
    this.DetailsMode = !this.DetailsMode;
    this.videoForDetails = this.videos[id - 1];
  }
  ChangeDetailsMode() {
    this.DetailsMode = !this.DetailsMode;
    this.chosenMovieId = 0;
  }
  ChangeButtonsMode(id: number) {
    if (this.videos[id - 1].amount > 1) {
      this.videos[id - 1].amount = (this.videos[id - 1].amount) - 1;
    }
    else if (this.videos[id - 1].amount == 1) {
      this.videos[id - 1].amount = (this.videos[id - 1].amount) - 1;
      this.initChanges(id)
    }

  }
  updateAmount(amount: number, id: number) {
    this.videos[id - 1].amount = amount;
    if (amount == 0) {
      this.initChanges(id)
    }
  }
  initChanges(id: number) {
    (<HTMLInputElement>document.getElementById(`title${id}`)).style.color = "red";
    (<HTMLInputElement>document.getElementById(`button${id}`)).setAttribute('disabled', 'disabled');
  }
}
