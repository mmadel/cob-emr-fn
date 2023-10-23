import { Component, Input, OnInit } from '@angular/core';
import { Address, AddressType, Countries, Country, States } from '../../models';
@Component({
  selector: 'app-single-address',
  templateUrl: './single-address.component.html',
  styleUrls: ['./single-address.component.css']
})
export class SingleAddressComponent implements OnInit {
  countries: Country[] = Countries;
  states: string[] = States;
  addressKeys = Object.values;
  addressTypes = AddressType;
  @Input() address: Address;
  constructor() { }

  ngOnInit(): void {
  }

}
