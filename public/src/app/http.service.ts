import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    console.log("In the service constructor");
  }

  getPets() {
    return this._http.get('/api/pets');
  }

  getOnePet(id: string) {
    return this._http.get('/api/pets/' + id);
  }

  addPet(newPet: any){
    return this._http.post('/api/pets', newPet)
  }

  updatePet(id, pet) {
    return this._http.put('/api/pets/' + id, pet);
  }

  removePet(id: string) {
    return this._http.delete(`/api/pets/${id}`);
  }

  likePet(id, num){
    return this._http.get('/api/pets/' + id + '/' + num);
  }

  // addQuote(authorid: string, content: string) {
  //   console.log('httpservice', content);
  //   return this._http.post(`/api/authors/${authorid}/quotes`, {content});
  // }

  // updateQuote(quoteid: string, value: number, authorid: string) {
  //   return this._http.post(`/api/authors/${authorid}/quotes/${quoteid}`, {value});
  // }

  // deleteQuote(quoteid: string) {
  //   return this._http.delete(`/api/quotes/${quoteid}`);
  // }
}
