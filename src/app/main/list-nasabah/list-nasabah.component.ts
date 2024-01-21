import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  // Tambahkan import ini
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/model/customer.model';

@Component({
  selector: 'app-list-nasabah',
  templateUrl: './list-nasabah.component.html',
  styleUrls: ['./list-nasabah.component.scss']
})
export class ListNasabahComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'customerId',
    'name',
    'accountNumber',
    'email',
    'phoneNumber',
    'debitCardType',
    'motherMaidenName',
    'accountCreationTime',
    'actions'
  ];
  dataSource: MatTableDataSource<Customer>;
  editForm: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private customerService: CustomerService, private fb: FormBuilder) {
    this.dataSource = new MatTableDataSource<Customer>([]);
    this.editForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.maxLength(20)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]],
      motherMaidenName: ['', [Validators.maxLength(20)]],
    });
  }

  ngAfterViewInit() {
    this.customerService.getCustomers().subscribe((customers) => {
      this.dataSource.data = customers;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  editUser(customer: Customer) {
    console.log('Editing customer:', customer);
    this.editForm.patchValue({
      name: customer.name,
      email: customer.email,
      phoneNumber: customer.phoneNumber,
      motherMaidenName: customer.motherMaidenName,
    });
    // Implement your edit logic here
  }

  saveChanges() {
    // Implement save changes logic here
    console.log('Saving changes:', this.editForm.value);
  }

  exportDataToCSV() {
    this.customerService.exportCustomersToCSV().subscribe((csvData) => {
      // Implement logic to handle the downloaded CSV data
      // You can use a library like FileSaver.js to save the data as a CSV file
    });
  }
}
