import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare function create(id:number, name:string, price:number, description:string, image:string): void;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  rowData: any; // Declare rowData to store the response data
  productID!: number;
  name!: string;
  price!: number;
  description!: string;
  image!: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.getRowData(1);
    
  }

  getRowData(id: number) {
    const url = `http://localhost:9080/api/listings`;
    this.http.get(url).subscribe(data => {
      this.rowData = data; // Store the response data in the rowData variable
      var temp = Array.from(this.rowData);
      for(var i = 0; i < temp.length; i++){
        this.productID = (temp[i] as { productID: number}).productID;
        this.name = (temp[i] as { name: string }).name;
        this.price = (temp[i] as { price: number }).price;
        this.description = (temp[i] as { description: string }).description;
        this.image = (temp[i] as { image: string }).image;
        //console.log(this.productID);
        create(this.productID, this.name,this.price,this.description,this.image);
      }
    });
  }  
}
