import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros;

  constructor(public navCtrl: NavController) {
    this.carros=[
      {nome:"Jaguar", preco: 200000},
      {nome:"Range Rover", preco: 50000},
      {nome:"Chevrolet", preco:20000},
      {nome:"Peugeout", preco:15000},
      {nome:"Renault", preco:10000},
    ];
  }

}
