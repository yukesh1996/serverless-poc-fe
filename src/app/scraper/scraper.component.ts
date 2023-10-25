import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-scraper',
  templateUrl: './scraper.component.html',
  styleUrls: ['./scraper.component.css']
})
export class ScraperComponent {
  website: string = '';

  constructor(private apiService: ApiService) { }

  onSubmit() {
    // Call your API service with the website URL
    this.apiService.scraper(this.website).subscribe(response => {
      // Handle the API response here
      console.log(response);
    });
  }
}
