import { Component, AfterViewInit } from '@angular/core';

declare function check(): void;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  ngAfterViewInit(){
    check();
  }

}
