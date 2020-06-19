import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiUrl = 'https://server-node-example.herokuapp.com/produtos';

  constructor(private http: HttpClient) { }

  GetProdutos(){
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

}
