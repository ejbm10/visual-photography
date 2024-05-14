import { Routes } from '@angular/router';
import { CompanyComponent } from '../company/company.component';
import { PackagesComponent } from '../packages/packages.component';
import { CustomersComponent } from '../customers/customers.component';

export const routes: Routes = [
    { path : 'company', component: CompanyComponent },
    { path : 'packages', component: PackagesComponent },
    { path : 'customers', component: CustomersComponent }

];
