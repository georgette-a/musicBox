import { Component, OnInit } from '@angular/core';

import { Media, MediaObject } from "@ionic-native/media/ngx";
import { File } from "@ionic-native/file/ngx";

@Component({
  selector: 'app-detect',
  templateUrl: './detect.page.html',
  styleUrls: ['./detect.page.scss'],
})
export class DetectPage implements OnInit {
  status: string="";
  audioFile: MediaObject;
  isRecording: boolean=false;

  constructor(private media: Media, private file:File) { }

  ngOnInit() {
  }

  startRecording(){
    this.audioFile = this.media.create(this.file.externalRootDirectory+'/audiofile.mp3');
    this.audioFile.startRecord();
    this.isRecording = true;
    this.status ="recording...";
  }

  stopRecording(){
    this.audioFile.stopRecord();
    this.status ="done";
    this.isRecording = false;
  }
}
