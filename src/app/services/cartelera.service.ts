import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tank } from '../models/tank.model';
import { environment as env } from '../../environments/environment';
import { StorageService } from '../services/storage.service';



@Injectable({
  providedIn: 'root'
})
export class CarteleraService {

  constructor(private http: HttpClient,
    private storageService: StorageService) { }

  getUsers(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Token': this.storageService.getCurrentToken()
      })
    };
    return this.http.get(`${env.url}/usuarios`,
      httpOptions
    );
  }

  getTanks(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Token': this.storageService.getCurrentToken()
      })
    };
    return this.http.get(`${env.url}/fueltanks`,
      httpOptions
    );
  }

  crear(aTank: Tank): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Token': this.storageService.getCurrentToken(),
        'Content-Type': 'application/json'
      })
    };
    const datos = {
      'name': aTank.name,
      'capacity': aTank.capacity,
      'content': aTank.content,
    };
    const cuerpo = JSON.stringify(datos);
    return this.http.post(`${env.url}/fueltank`,
      cuerpo, httpOptions
    );
  }

  borrar(aTank: Tank): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Token': this.storageService.getCurrentToken()
      })
    };
    const id = aTank.id;
    return this.http.delete(`${env.url}/fueltank/` + id, httpOptions);
  }
}
