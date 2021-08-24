import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item1 :string= 'item1';
  item2 :string= 'item2';
  item3 :string= 'item3';
  item4 :string= 'item4';


  constructor() { }

  ngOnInit(): void {
  }

}
