import { Component, OnInit } from '@angular/core';
import { CarteleraService } from '../../services/cartelera.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Tank } from '../../models/tank.model';

@Component({
  selector: 'app-list-tanks',
  templateUrl: './list-tanks.component.html',
  styleUrls: ['./list-tanks.component.scss']
})
export class ListTanksComponent implements OnInit {

  tanks: string;
  constructor(private service: CarteleraService) {
    this.service.getTanks().subscribe(
      data => {
        this.tanks = data;
        console.log(data);
      }
    );
  }

  ngOnInit() {
  }
  borrar(aTank: Tank): void {
    this.service.borrar(aTank).subscribe(
      data => {
        this.tanks = data;
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        window.alert(error.message);
      }
    );
  }
}
