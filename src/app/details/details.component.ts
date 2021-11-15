
import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Video } from '../video';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements  OnChanges, DoCheck  {
 
  @Input() videosDetail!: Video;
  disableMode = false;
  buttonTitle: string = "Edit";
  modeMore = false;
  editMode = false;



  
  btnVal = "Read More";
  @Output() changeMode = new EventEmitter<boolean>();
  @Output() updateAmount = new EventEmitter<number>();
  @Output() updateThisVideo = new EventEmitter<Video>()
  constructor() { }
  ngDoCheck(): void {
    this.changeButtonAndTitleMode();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.changeButtonAndTitleMode();
  }
 
  changeDetailsMode() {
    this.changeMode.emit();
  }
  public changeToEditMode(){
    this.editMode = true;
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
  changeButtonAndTitleMode() {
    if (this.videosDetail.amount == 0) {
      this.disableMode = true;
      (<HTMLInputElement>document.getElementById(`title`)).style.color = "red";
    }
  }
  changeEditMode(mode: boolean){
    this.editMode = mode;
  }
  changeModeMore() {
    this.modeMore = !this.modeMore;
    if(this.btnVal == "Read More"){
      this.btnVal = "Read Less"
    }
    else{
      this.btnVal = "Read More"
    }
   
    }
    updateVideo(video: Video){
      this.videosDetail = video;
      this.updateThisVideo.emit(this.videosDetail);
    }
    
}