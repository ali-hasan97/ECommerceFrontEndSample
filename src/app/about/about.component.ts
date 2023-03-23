import { Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { S3ServiceService } from '../s3-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {

  fileName = '';
  file!: File;

  constructor(private s3Service: S3ServiceService) { }

  // selects file and sets fileName to its name
  onFileSelected(e: any) {
    this.file = e.target.files[0];
    this.fileName = e.target.files[0].name;
  }

  // uploads image to S3 only after whole form has been submitted.
  public formSubmit() {
    if (this.file) {
      this.s3Service.uploadFile(this.file);
    }
  }
}
