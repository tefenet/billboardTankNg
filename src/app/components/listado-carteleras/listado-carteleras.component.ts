import { Component, OnInit } from '@angular/core';
import { CarteleraService } from '../../services/cartelera.service';
import { Tank } from '../../models/tank.model';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-listado-carteleras',
  templateUrl: './listado-carteleras.component.html',
  styleUrls: ['./listado-carteleras.component.css']
})
export class ListadoCartelerasComponent implements OnInit {
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
