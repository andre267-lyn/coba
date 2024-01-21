import { Component} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-nasabah',
  templateUrl: './list-nasabah.component.html',
  styleUrls: ['./list-nasabah.component.scss']
})

export class ListNasbahComponent {
  displayedColumns = [
    'id',
    'name',
    'accountNumber',
    'email',
    'phoneNumber',
    'debitCardType',
    'motherMaidenName',
    'accountCreationTime'
  ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create sample users
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) {
      users.push(createNewUser(i));
    }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    // Check if the properties are defined before assigning
    if (this.paginator && this.sort) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
}

function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';
  const accountCreationTime = new Date();

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    accountNumber: generateRandomAccountNumber(),
    email: generateRandomEmail(name),
    phoneNumber: generateRandomPhoneNumber(),
    debitCardType: generateRandomDebitCardType(),
    motherMaidenName: generateRandomMotherMaidenName(),
    accountCreationTime: accountCreationTime.toLocaleString()
  };
}

const COLORS = [
  'maroon',
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'purple',
  'fuchsia',
  'lime',
  'teal',
  'aqua',
  'blue',
  'navy',
  'black',
  'gray',
];
const NAMES = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

function generateRandomAccountNumber(): string {
  return Math.floor(Math.random() * 9000000000) + 1000000000 + '';
}

function generateRandomEmail(name: string): string {
  const domain = '@example.com';
  return name.toLowerCase().replace(' ', '.') + domain;
}

function generateRandomPhoneNumber(): string {
  return '+1 ' + Math.floor(Math.random() * 900) + 100 + '-' + Math.floor(Math.random() * 9000) + 1000;
}

function generateRandomDebitCardType(): string {
  const types = ['Visa', 'MasterCard', 'American Express'];
  return types[Math.floor(Math.random() * types.length)];
}

function generateRandomMotherMaidenName(): string {
  const motherNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown'];
  return motherNames[Math.floor(Math.random() * motherNames.length)];
}

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
  accountNumber: string;
  email: string;
  phoneNumber: string;
  debitCardType: string;
  motherMaidenName: string;
  accountCreationTime: string;
}
