import { Component, OnInit } from '@angular/core';
import { customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
custommers : customer[] = [
  {customerNo: 1, name: 'Hóa', age: 13, city: 'ha noi', state: 'dong da'},
  {customerNo: 2, name: 'Thúy', age: 15, city: 'ha noi', state: 'dong da'},
  {customerNo: 3, name: 'Hoàng', age: 19, city:'ha noi', state: 'dong da'},

];
  constructor() { }

  ngOnInit(): void {
  }

}
