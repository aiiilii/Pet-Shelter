import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  pets: [];

  constructor(
    private _httpService: HttpService
  ) { 
    this.pets = [];
  }

  ngOnInit() {
    this.getPets();
  }

  getPets() {
    let observable = this._httpService.getPets();
    observable.subscribe((data: any) => {
      console.log("Got our data!", data);
      // let temp = data['data'].sort();
      this.pets = data['data'];
      console.log(this.pets);
    })
  }

}
