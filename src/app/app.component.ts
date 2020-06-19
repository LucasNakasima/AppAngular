import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  produtos: Array<any>;

  constructor(private apiService: ApiService){}

  ngOnInit() {
    this.ListProducts();
    console.log(this.produtos);
  }

  ListProducts(){
    this.apiService.GetProdutos().subscribe(data => this.produtos = data);
  }

}

