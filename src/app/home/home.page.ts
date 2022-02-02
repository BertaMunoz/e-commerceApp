import { Component, OnInit } from '@angular/core';
import { Sac } from '../models/sac.entity';
import { SacService } from '../services/sac.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

sacs: Sac[] = [];
 
 constructor(private service : SacService) {

 }


 initSac(){
      this.service.findAll().subscribe((data) =>{
        this.sacs = data;
      })
 }

 ngOnInit() {
  this.initSac();
 }
}
