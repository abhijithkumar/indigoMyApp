import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public listVisible = false;
  public linkVisible = false;
  public productsTable1: any = null;

  constructor(
    private productsService: ProductsService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.productsService.getData('Table 1').subscribe(data => this.productsTable1 = data);
  }
}
