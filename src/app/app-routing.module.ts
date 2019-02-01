import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BenefactorComponent } from './benefactor/benefactor.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'benefactor', component: BenefactorComponent
  }, {
    path: 'beneficiary', component: BeneficiaryComponent
  }, {
    path: 'home', component: HomeComponent
  }, {
    path: 'membership', component: MembershipComponent
  }, {
    path: 'product', component: ProductComponent
  }, {
    path: 'profile', component: ProfileComponent
  }, {
    path: 'registration', component: RegistrationComponent
  }, {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
