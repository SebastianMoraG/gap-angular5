import { CarInterface } from './../../interfaces/car.interface';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarCardComponent implements OnInit {
  @Input() car: CarInterface;
  constructor() { }

  ngOnInit() {
  }

}
