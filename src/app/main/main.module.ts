import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Mengimpor FormsModule dan ReactiveFormsModule
import { MainComponent } from './main.component';
import { ListNasabahComponent } from './list-nasabah/list-nasabah.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListAdminComponent } from './list-admin/list-admin.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children: [
      {
        path:'',
        redirectTo:'/main/dashboard',
        pathMatch:'full'
      },
      {
        path:'dashboard', component: DashboardComponent
      },
      {
        path:'list-nasabah', component: ListNasabahComponent
      },
      {
        path:'list-admin', component: ListAdminComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    ListNasabahComponent,
    ListAdminComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class MainModule { }
