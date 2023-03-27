import { Component, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { S3ServiceService } from '../s3-service.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {

  fileName = '';
  file!: File;

  username = this.authService.getUsername();
  password = this.authService.getPassword();

  name!: string;
  price!: number;
  description!: string;

  constructor(
    private s3Service: S3ServiceService,
    private http: HttpClient,
    private authService: AuthenticationService) { }

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
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)});
    const formData = new FormData();
    console.log(headers);
    console.log(this.username);
    console.log(this.password);
    formData.append('name', this.name);
    formData.append('price', this.price.toString());
    formData.append('description', this.description);
    formData.append('image', this.fileName);
    console.log(headers);

    this.http.post('http://localhost:9080/api/listings', formData, {headers}).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
