import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements  OnChanges, DoCheck  {
 
  @Input() videosDetail: any;
  disableMode = false;
  modeMore = false;
  btnVal = "Read More";
  @Output() changeMode = new EventEmitter<boolean>();
  @Output() updateAmount = new EventEmitter<number>();
  constructor() { }
  ngDoCheck(): void {
    this.ChangeButtonAndTitleMode();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ChangeButtonAndTitleMode();
  }
 
  changeDetailsMode() {
    this.changeMode.emit();
  }
  changeAmount() {
    if (this.videosDetail.amount > 1) {
      this.videosDetail.amount = this.videosDetail.amount - 1
    }
    else if (this.videosDetail.amount == 1) {
      this.videosDetail.amount = this.videosDetail.amount - 1;
      this.disableMode = true;
    }
    this.updateAmount.emit(this.videosDetail.amount)
  }
  ChangeButtonAndTitleMode() {
    if (this.videosDetail.amount == 0) {
      this.disableMode = true;
      (<HTMLInputElement>document.getElementById(`title`)).style.color = "red";
    }
  }
  ChangeModeMore() {
    this.modeMore = !this.modeMore;
    if(this.btnVal == "Read More"){
      this.btnVal = "Read Less"
    }
    else{
      this.btnVal = "Read More"
    }
    }

}
