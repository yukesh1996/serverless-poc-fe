import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private apiService: ApiService) { }
  products:any = []
  product: any;
  onGetProducts() {
    this.apiService.getProducts().subscribe(response => {
      this.products = response.data
    });
  }

  ngOnInit() {
    this.onGetProducts();
  }
}
