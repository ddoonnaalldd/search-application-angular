import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from './search-model';

@Injectable({
  providedIn: 'root'
})

/*
* API Service for Search
* Uses 'search/repositories' API
* ref: https://docs.github.com/en/rest/reference/search#search-repositories
*/
export class SearchService {

  private SERVER_URL = 'https://api.github.com/';

  private items:Items[] = [];

  constructor(private httpClient: HttpClient) {}

  // function to call the API
  public get(query:string){
    console.log(this.SERVER_URL + query);
    return this.httpClient.get(this.SERVER_URL  + query)
    .subscribe((data) => {
       this.setServiceResponse(data);
    });
  }

  // parses and sets the retrieved data
  public setServiceResponse(data:any){
    for (let i of data.items) {
        let item :any = [];
        item.name = i.name;
        item.html_url = i.html_url;
        this.items.push(item);
    }
  }

  // retrieves stored local data
  public getServiceResponse(){
    return this.items;
  }
}
