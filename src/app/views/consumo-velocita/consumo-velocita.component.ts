import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsumoService } from '../../api/consumo.service';
import { VelocitaService } from '../../api/velocita.service';
import {forkJoin} from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consumo-velocita',
  templateUrl: './consumo-velocita.component.html',
  styleUrls: ['./consumo-velocita.component.css']
})
export class ConsumoVelocitaComponent implements OnInit {

  constructor(public velocitaService: VelocitaService, public consumoService: ConsumoService, public router: Router) { }
  public listaVelocita : any[];
  public colsVelocita : any[];
  public listaConsumo : any[];
  public colsConsumo : any[];
  public obs: Observable<any>[] = [];

  ngOnInit(): void {
    this.colsVelocita =[
      {field: "velocitaId", header: "Velocità ID"},
      {field: "velocita", header: "Velocità in m/m"},
      {field: "nastroId", header: "Nastro ID"}
    ];
    this.colsConsumo =[
      {field: "consumoId", header: "Consumo ID"},
      {field: "consumo", header: "Consumo in watt"},
      {field: "nastroId", header: "Nastro ID"}
    ];
    this.obs.push(this.consumoService.getAll(), this.velocitaService.getAll());
    forkJoin(this.obs).subscribe((result)=>{
      this.listaConsumo = result[0].response;
      this.listaVelocita = result[1].response;
    })

  }

  getAlert(item){
    if(item > 60){
      return "GUASTO IMMINENTE"
    }else{
      return "NO"
    }
  }

  goToNastro(id){
    this.router.navigate(["nastro/" + id]);
  }

}
