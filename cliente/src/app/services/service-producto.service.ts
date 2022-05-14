import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductoService {
  url = "http://127.0.0.1:4000/Api/productos";

  constructor(private httpClient: HttpClient) { }

  obtener(): Observable<any>{
    return this.httpClient.get(this.url);
  }
}
