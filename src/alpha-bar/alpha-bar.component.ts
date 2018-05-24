import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alpha-bar',
  templateUrl: 'alpha-bar.component.html'
})
export class AlphaBarComponent {
  @Input() items: Array<string>;
  @Output() onHeaderClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {  

    console.log(this.items)
  }
 
  expandContact() {
    this.onHeaderClicked.emit(this.items);
  }
}