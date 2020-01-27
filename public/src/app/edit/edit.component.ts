import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  onePet = {
    petName: "",
    petType: "",
    desc: "",
    skillOne: "",
    skillTwo: "",
    skillThree: "",
    like: 0
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

  errors = {};

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe((data: any) => {
      console.log(data.id); // not in an object form
      this.getPet(data.id);
    });
  }

  getPet(id) {
    let observable = this._httpService.getOnePet(id);
    observable.subscribe((data: any) => {
      if ('error' in data) {
        this.errors = data.error['errors'];
        console.log(this.errors);
      } else {
        console.log("Got one pet!", data);
        this.onePet = data['data'];
      }
    });
  }

  editPet(id) {
    console.log(this.onePet);
    let observable = this._httpService.updatePet(id, this.onePet);
    observable.subscribe((data: any) => {
      // debugger;
      if ('error' in data) {
        this.errors = data.error['errors'];
        console.log("WE HAD A PROBLEM");
        console.log(this.errors);
      } else {
        console.log("UPDATED");
        this._router.navigate(['/pets/' + id]);
      }
    })
  }

}
