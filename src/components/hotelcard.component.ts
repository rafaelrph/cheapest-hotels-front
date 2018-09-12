
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'hotel-card',
  templateUrl: './hotelcard.component.html',
  styleUrls: ['./hotelcard.component.css']
})
export class HotelCardComponent {

    @Input() hotel: Hotel;

    @Output() selecionar = new EventEmitter<HotelCardComponent>();

    constructor() { }
}