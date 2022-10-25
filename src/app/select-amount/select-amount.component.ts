import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiMiddlewareService } from '../api-middleware.service';

@Component({
  selector: 'app-select-amount',
  templateUrl: './select-amount.component.html',
  styleUrls: ['./select-amount.component.scss']
})
export class SelectAmountComponent implements OnInit {

  store = '';

  amountList: string[] | [] = [];

  constructor(
    public dialogRef: MatDialogRef<SelectAmountComponent>,
    private apiMiddlewareService: ApiMiddlewareService,
    @Inject(MAT_DIALOG_DATA) public storeName: string,
  ) { 
    this.store = storeName;
    
  }

  ngOnInit(): void {
    this.getAmountRange(this.store);
  }

  getAmountRange(store:string) {
      this.apiMiddlewareService.getAmountRange(store).subscribe(res => {
        this.amountList = res.amonts;
      })
  }
}
