import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {
  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  wordChanged(event){
    this.change.emit(event.currentTarget.value);
  }

}
