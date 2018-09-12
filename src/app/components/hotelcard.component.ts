
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'hotel-card',
  templateUrl: './hotelcard.component.html',
  styleUrls: ['./hotelcard.component.css']
})
export class HotelCardComponent {

    @Input() name;
    @Input() price;
    @Input() address;
    @Input() contacts;

    @Output() selecionar = new EventEmitter<HotelCardComponent>();

    constructor() { }
}