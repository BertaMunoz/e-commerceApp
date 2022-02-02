import { Component, OnInit } from '@angular/core';
import { Sacs } from '../models/sac.entity';
import { SacService } from '../services/sac.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

sacs: Sacs[] = [];
 
 constructor(private service : SacService) {

 }


 initSac(){
      
 }

 ngOnInit() {

 }
}
