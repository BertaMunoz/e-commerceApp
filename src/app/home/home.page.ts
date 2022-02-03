import { Component, Input, OnInit } from '@angular/core';
import { Sac } from '../models/sac.entity';
import { SacService } from '../services/sac.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  
sacs: Sac[] = [];
panier :  any = []; 
 
 constructor(private service : SacService) {

 }


 initSac(){
      this.service.findAll().subscribe((data) =>{
        this.sacs = data;
      })
 }

 //pour ajouter au panier au clic sur le bouton
 ajouter(id: number) {
  //this.panier.push(id)
  console.log("article ajouté au panier");
  

 }

 ajoutFavori(id:number) {
  console.log("article ajouté à la liste des favoris");
 }
 ngOnInit() {
  this.initSac();
 }
}
