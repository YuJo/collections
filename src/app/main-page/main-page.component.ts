import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiMiddlewareService } from '../api-middleware.service';
import { SelectAmountComponent } from '../select-amount/select-amount.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  storeLogoList: string[] | [] = [];

  constructor(
    public dialog: MatDialog,
    private apiMiddlewareService: ApiMiddlewareService,
  ) { }

  ngOnInit(): void {
    this.apiMiddlewareService.getStores().subscribe(res => {
      this.storeLogoList = res.stores;
    })
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
