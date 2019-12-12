import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../shared/services/ofertas.service';
import { Oferta } from '../shared/models/ofertas.model';

@Component({
  selector: 'pu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.ofertasService.getOfertas()
    console.log(this.ofertas)
  }

}
