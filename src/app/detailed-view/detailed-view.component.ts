import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})

export class DetailedViewComponent {
  rowData: any; // Declare rowData to store the response data
  name!: string;
  price!: number;
  description!: string;
  image!: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRowData(1)
  }

  getRowData(id: number) {
    const url = `http://localhost:9080/api/listings/${id}`;
    this.http.get(url).subscribe(data => {
      this.rowData = data; // Store the response data in the rowData variable
      this.name = (data as { name: string }).name;
      this.price = (data as { price: number }).price;
      this.description = (data as { description: string }).description;
      this.image = (data as { image: string }).image;

    });
  }
}

