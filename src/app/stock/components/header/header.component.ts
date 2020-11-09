import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { StockDataService } from "../../services/stock-data.service";

@Component({
    selector: 'app-stock-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderStockComponent {
    public listItems: Array<string> = ['USD', 'EUR', 'GBP'];
    public selected = this.service.selectedCurrency;

    constructor(public router: Router, private service: StockDataService) { }

    public onCurrencyChange(e: any): void {
        this.service.changeCurrency(e);
    }
}
