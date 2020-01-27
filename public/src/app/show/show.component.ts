import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  onePet = {
    petName: "",
    petType: "",
    desc: "",
    skillOne: "",
    skillTwo: "",
    skillThree: "",
    like: 0
  };
  isValid: Boolean = false;
  num;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
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
      console.log("Got one pet!", data);
      this.onePet = data['data'];
    });
  }

  deletePet(id) {
    let observable = this._httpService.removePet(id);
    observable.subscribe((data: any) => {
      console.log("Deleting!", data);
      this._router.navigate(['/pets']);
    });
  }

  likePet(id, onePet, num){
    if(this.isValid==false){
      this.isValid=true;
    }
    console.log(num);
    let observable = this._httpService.likePet(id, onePet.like + num);
    observable.subscribe( (data: any) => {
      console.log("liked", data);
      this.ngOnInit();
    })
  }

}
