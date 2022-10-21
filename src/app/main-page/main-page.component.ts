import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectAmountComponent } from '../select-amount/select-amount.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  storeLogoList = ['seven-logo', 'momo-logo', 'hilife-logo', 'fmart-logo']

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {

  }

  getVoucher(storeName: string) {
    const dialogRef = this.dialog.open(SelectAmountComponent, {
      width: '1300px',
      data: storeName
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

}
