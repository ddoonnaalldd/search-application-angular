import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from './search-model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private SERVER_URL = 'https://api.github.com/';

  private items:Items[] = [];

  constructor(private httpClient: HttpClient) {}

  public get(query:string){
    console.log(this.SERVER_URL + query);
    return this.httpClient.get(this.SERVER_URL  + query)
    .subscribe((data) => {
       this.setServiceResponse(data);
    });
  }

  public setServiceResponse(data:any){
    for (let i of data.items) {
        let item :any = [];
        item.name = i.name;
        item.html_url = i.html_url;
        this.items.push(item);
    }
  }

  public getServiceResponse(){
    return this.items;
  }
}
