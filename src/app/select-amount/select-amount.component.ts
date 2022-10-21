import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-select-amount',
  templateUrl: './select-amount.component.html',
  styleUrls: ['./select-amount.component.scss']
})
export class SelectAmountComponent implements OnInit {

  store = ''

  constructor(
    public dialogRef: MatDialogRef<SelectAmountComponent>,
    @Inject(MAT_DIALOG_DATA) public storeName: string,
  ) { 
    this.store = storeName;
  }

  ngOnInit(): void {
  }

}
