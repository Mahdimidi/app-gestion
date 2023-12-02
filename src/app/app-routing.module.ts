import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { AuthGuard } from './auth.guard';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditPrdctComponent } from './edit-prdct/edit-prdct.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"",component:LoginComponent},
  {path:"dash",component:DashComponent,children:[{path:"product",component:ProductsComponent}]},
  {path:"new-product",component:NewProductComponent},
  {path:"edit/:id",component:EditPrdctComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
