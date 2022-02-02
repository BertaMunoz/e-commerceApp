import { Injectable } from '@angular/core';

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
