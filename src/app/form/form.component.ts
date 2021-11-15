import { Video } from './../video';
import { DatePipe } from '@angular/common';
import { ResourceLoader } from '@angular/compiler';
import { Component, createPlatform, EventEmitter, Injectable, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ECategory } from '../ecategory';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  ageRestrictionMode = false;
  @Input() videosForm!: Video;
  @Input() videos: Video[]=[];
  @Input() Mode: any;
  @Input() buttonT = "";
  @Output() updateVideo = new EventEmitter<any>();
  @Output() addVideos = new EventEmitter<any>();
  @Output() changeModes = new EventEmitter<boolean>();
  video: Video = {
    id: 0,
    title: '',
    imagePath: '',
    category: ECategory.action,
    //dateAdded: undefined,
    production: '',
    amount: 0,
    description: '',
    dateAdded: new Date('July 08, 2010')
  };
  form = new FormGroup({
   
    title: new FormControl('',Validators.required),
    description: new FormControl('',[Validators.required,Validators.maxLength(500)]),
    category: new FormControl('',Validators.required),
    date: new FormControl('',[Validators.required, Validators.pattern('/^\d{1,2}\.\d{1,2}\.\d{4}$/')]),
    production: new FormControl('',Validators.required),
    amount: new FormControl('',[Validators.required, Validators.pattern('1-9')]),
    age_restriction: new FormControl(false),
    radioGroup: new FormControl(false,[]),
  });
  constructor(private datePipe: DatePipe) {  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.buttonT);
    if(this.buttonT == "Edit"){
     
     this.updateForm();
    }
  }
  updateForm() {
 
    this.form.setValue({
 
      title: this.videosForm.title,
      description: this.videosForm.description,
      category: this.videosForm.category,
      date: this.videosForm.dateAdded,
      production: this.videosForm.production,
      amount: this.videosForm.amount,
      age_restriction: false,
      radioGroup: false,
    });
  }
  ngOnInit(): void {
  }
  changeAgeMode(){
    this.ageRestrictionMode = true;
  }
  setAgeValidator(){
    this.ageRestrictionMode = !this.ageRestrictionMode;
   
  }
  setValidator(){
   
  }
  onSubmit(){
   
     
    if(this.buttonT == "Edit"){
      console.log(this.form)
      this.videosForm.title = this.form.getRawValue().title
      this.videosForm.description = this.form.getRawValue().description
      this.videosForm.category = this.form.getRawValue().category
      this.videosForm.dateAdded = this.form.getRawValue().date
      this.videosForm.production = this.form.getRawValue().production
      this.videosForm.amount = this.form.getRawValue().amount
       this.updateVideo.emit(this.videosForm);
    }
    else if(this.buttonT == "Add"){
      this.video.id = this.videos.length+1
      this.video.imagePath = "";
      this.video.title = this.form.getRawValue().title
      this.video.description = this.form.getRawValue().description
      this.video.category = this.form.getRawValue().category
      this.video.dateAdded = this.form.getRawValue().date
      this.video.production = this.form.getRawValue().production
      this.video.amount = this.form.getRawValue().amount
      this.videos.push(this.video);
      this.addVideos.emit(this.videos);
    }
    this.changeModes.emit(false)
  }
 
}
