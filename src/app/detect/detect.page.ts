import { Component, OnInit } from '@angular/core';

import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from "@ionic-native/file/ngx";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.page.html',
  styleUrls: ['./detect.page.scss'],
})
export class DetectPage implements OnInit {
  status: string="";
  audioFile: MediaObject;
  isRecording: boolean=false;

  constructor(
    private media: Media, 
    private platform:Platform, 
    private file: File) { }

  ngOnInit() {
  }

  startRecording(){
    alert(this.file.externalDataDirectory+ 'my_file.mp3');
    this.file.createFile(this.file.externalDataDirectory, 'my_file.mp3', true).then(() => {
      
      
      alert('hello4');
      // this.audioFile = this.media.create(this.file.externalDataDirectory + 'my_file.m4a');
      this.audioFile = this.media.create('/storage/emulated/0/Android/data/io.ionic.starter/files/my_file.mp3');
      this.audioFile.onError.pipe().subscribe({
        next: res => {
          alert(JSON.stringify(res));
        }
      });
      this.audioFile.onSuccess.pipe().subscribe({
        next: res => {
          alert("success");
        }
      });
      alert('hello3');
      this.audioFile.startRecord();
      this.isRecording = true;

      // alert('hello2');
      // window.setTimeout(() => this.audioFile.stopRecord(), 5000);
      // alert('hello');
      
    });
  }

  stopRecording(){
    this.audioFile.stopRecord();
    this.audioFile.play
    this.isRecording = false;
    alert(this.audioFile.getDuration());
   

  }
}
