import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-section',
  templateUrl: './store-section.component.html',
  styleUrls: ['./store-section.component.scss']
})
export class StoreSectionComponent implements OnInit {
  @Input() imgName: string = '';

  imgSrc = '';

  constructor() { }

  ngOnInit(): void {
    this.imgSrc = `../../../assets/images/${this.imgName}.png`;
  }



}
