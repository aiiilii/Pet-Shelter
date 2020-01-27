import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newPet = {
    petName: "",
    petType: "",
    desc: "",
    skillOne: "",
    skillTwo: "",
    skillThree: ""
  };

  // errors = {
  //   petName: {
  //     message: ""
  //   },
  //   petType: {
  //     message: ""
  //   },
  //   desc: {
  //     message: ""
  //   }
  // };

  // errors = [{}];

  errors = {};

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  submit() {
    console.log('------------------------------------------------')
    let observable = this._httpService.addPet(this.newPet);
    observable.subscribe( (data: any) => {
      if ('error' in data) {
        console.log(data.error['errors']);
        this.errors = data.error['errors'];
        console.log(this.errors);
        // console.log(data.error);
        // for (const key in data.error.errors) {
        //   this.errors.push({[data.error.errors[key]]: data.error.errors[key].message});
        // }
        // console.log(this.errors);
      } else {
        console.log(this.newPet);
        this._router.navigate(['/pets']);
      }
    });
  }

}
