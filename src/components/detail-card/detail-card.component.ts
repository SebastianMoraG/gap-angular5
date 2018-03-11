import { CarInterface } from './../../interfaces/car.interface';
import { Component, Input  } from '@angular/core';

@Component({
  selector: 'detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent{
  @Input() car: CarInterface;

  constructor() { }

}
