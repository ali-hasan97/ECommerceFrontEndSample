import { Component, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { S3ServiceService } from '../s3-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {

  fileName = '';
  file!: File;
  // const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa(username + ':' + password));
  formData!: FormData;

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
    // return false;
  }

  public onSubmit() {
    // this.http.post("http://localhost:9080/api/listings", FormData, { header }).subscribe(
    //   (response) => console.log("success"). (error) => {"error submit"}
    // );
  }
}
