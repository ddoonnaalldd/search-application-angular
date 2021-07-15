import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../search/search-service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchControl: FormControl = new FormControl();
  public searchName = '';
  private SEARCH_REPO = 'search/repositories?'

  constructor(private apiService: SearchService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.searchControl.value || this.searchControl.value.trim() === '') {
      return;
    }
    this.searchAllPublicRepositories(this.searchControl.value);
  }

  public searchAllPublicRepositories(query:string){
    const queryString = 'q=' + encodeURIComponent(query) + '&sort=stars&order=desc';
    this.apiService.get(this.SEARCH_REPO + queryString);
  }
}
