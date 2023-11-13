import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../../models';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-view-address',
  templateUrl: './view-address.component.html',
  styleUrls: ['./view-address.component.css']
})
export class ViewAddressComponent implements OnInit {
  @Input() address: Address = {}
  @Input() addressView: String
  addressType?: string | null;
  other?: string | null;
  firstAddress?: string | null;
  secondAddress?: string | null;
  country?: string | null;
  city?: string | null;
  province?: string | null;
  state?: string | null
  zipCode?: string | null;
  constructor() { }

  ngOnInit(): void {
    this.addressType = this.address.addressType;
    this.firstAddress = this.address.firstAddress;
    this.secondAddress = this.address.secondAddress
    this.country = this.address.country;
    this.city = this.address.city;
    this.province = this.address.province;
    this.state = this.address.state;
    this.zipCode = this.address.zipCode;
  }

}
