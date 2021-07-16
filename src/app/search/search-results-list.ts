import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Items } from './search-model';
import { SearchService } from './search-service';

@Component({
  selector: 'search-results-list',
  templateUrl: './search-results-list.html',
})

/*
* Displays the list of retrieved data from API
*/
export class SearchListComponent implements OnInit{
  public searchResults:Items[] = [];
  constructor(private apiService: SearchService ) {}

  ngOnInit(): void {
    this.searchResults = this.apiService.getServiceResponse();
  }

}
