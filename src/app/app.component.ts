import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './app.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DateFormatPipe } from './app.pipe';

export interface PeriodicElement {
  CustomerId: string;
  EmployeeId: number;
  Freight: number;
  OrderId: string;
  ShipAddress: string;
  ShipCity: string;
  ShipCountry: string;
  ShippedDate: Date;
  OrderDate: Date;
  RequiredDate: Date;
}

const ELEMENT_DATA: PeriodicElement[] = []

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DateFormatPipe, RouterOutlet, MatTableModule, MatPaginatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements AfterViewInit {
  constructor(private dataService: DataService){}
  title = 'kloudConnect';
  serviceData: any;
  displayedColumns: string[] = ['CustomerId', 'EmployeeId', 'Freight', 'OrderId','ShipAddress', 'ShipCity', 'ShipCountry', 'ShippedDate', 'OrderDate', 'RequiredDate'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataService.getDataService().subscribe(response => {
      this.serviceData = response;
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.serviceData.value);
      this.dataSource.paginator = this.paginator;
    })
  }
}
