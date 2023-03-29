import { Component, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { S3ServiceService } from '../s3-service.service';
import { AuthenticationService } from '../authentication.service';

declare function check(): void;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email!: string;
  usernameInp!: string;
  passwordInp!: string;

  username = "genericUser";
  password = "genericPass";

  ngAfterViewInit(){
    check();
  }

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService) { }

  public onSubmit() {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password), "Content-Type":"application/json"});

    this.http.post('http://localhost:9080/api/users', {"username": `${this.usernameInp}`, "password": `${this.passwordInp}`, "email": `${this.email}`}, {headers}).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

} 
