import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { dummyTransactionData } from 'src/app/shared/constants/constants';

@Component({
     selector: 'app-transaction',
     templateUrl: './transaction.component.html',
     styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
     public barChartData: any[] = [
          { data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 21, 54, 60], label: 'Series A' },
          { data: [28, 48, 40, 19, 86, 27, 90, 10, 18, 11, 45, 65], label: 'Series B' }
     ];

     public barChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

     public barChartOptions: any = {
          scaleShowVerticalLines: false,
          responsive: true,
          legend: { position: 'top' },
          scales: {
               xAxes: [
                    {
                         stacked: true
                    }
               ],
               yAxes: [
                    {
                         stacked: true
                    }
               ]
          }
     };

     public pieChartData: any[] = [
          { name: 'Work', value: 11 },
          { name: 'Eat', value: 2 },
          { name: 'Commute', value: 2 },
          { name: 'Watch TV', value: 2 },
          { name: 'Sleep', value: 7 }
     ];

     public pieChartOptions: any = {
          view: [700, 400],
          legend: true,
          legendPosition: 'below'
     };

     public dataChartOptions: EChartsOption = {
          legend: {},
          tooltip: {},
          dataset: {
               source: [
                    ['product', '2015', '2016', '2017'],
                    ['Matcha Latte', 43.3, 85.8, 93.7],
                    ['Milk Tea', 83.1, 73.4, 55.1],
                    ['Cheese Cocoa', 86.4, 65.2, 82.5],
                    ['Walnut Brownie', 72.4, 53.9, 39.1]
               ]
          },

          xAxis: { type: 'category' },

          yAxis: {},

          series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
     };
     mergeOptions: EChartsOption;
     public transactionData: any = dummyTransactionData;

     // prettier-ignore
     constructor(

     ){

     }

     ngOnInit(): void {}
}
