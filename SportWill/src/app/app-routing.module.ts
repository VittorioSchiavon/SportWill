import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWillComponent } from './add-will/add-will.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WillDetailComponent } from './will-detail/will-detail.component';

const routes: Routes = [
{  path: 'homepage', component: HomepageComponent},
{  path: 'detail/:id', component: WillDetailComponent},
{  path: 'signIn', component: SignInComponent},
{  path: 'signUp', component: SignUpComponent},
{  path: 'add', component: AddWillComponent},
{  path: '**', component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
