import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sac } from '../models/sac.entity';

@Injectable({
  providedIn: 'root'
})
export class SacService {

 constructor(private http: HttpClient) { 

   
  }

   public findAll() {
      return this.http.get<Sac[]>(`${environment.apiUrl}/sacs`);
    }
 }
