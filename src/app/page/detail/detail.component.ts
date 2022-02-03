import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sac } from 'src/app/models/sac.entity';
import { SacService } from 'src/app/services/sac.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  sac: Sac ;
  id: number;

  constructor(private service : SacService, private activeRoute: ActivatedRoute) {

    this.id = this.activeRoute.snapshot.params['id'];
   }
   initSac(){
     this.service.findById(this.id).subscribe((data) => (this.sac = data));
   }

  ngOnInit() {
    this.initSac();
    console.log(this.id);
    
  }

}
