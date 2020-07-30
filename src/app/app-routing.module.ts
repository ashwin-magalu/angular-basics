import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
  /* { path: '', redirectTo: '/departments-list', pathMatch: 'full' },
  { path: 'departments-list', component: DepartmentListComponent },
  {
    path: 'departments-list/:id',
    component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent },
    ],
  },
  //we changed all 'departments' url to 'departments-list'
  { path: 'employees', component: EmployeeComponent },
  { path: '**', component: PageNotFoundComponent }, */
];
// We define all possible routes here as an object

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  /* DepartmentListComponent,
  EmployeeComponent,
  PageNotFoundComponent,
  DepartmentDetailComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent, */
];
