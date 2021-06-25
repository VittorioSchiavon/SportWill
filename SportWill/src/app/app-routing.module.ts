import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WillDetailComponent } from './will-detail/will-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditableFormComponent } from './editable-form/editable-form.component';


const routes: Routes = [
{  path: 'homepage', component: HomepageComponent},
{  path: 'detail/:id', component: WillDetailComponent},
{  path: 'edit/:id', component: EditableFormComponent },
{  path: 'signIn', component: SignInComponent},
{  path: 'signUp', component: SignUpComponent},
{  path: 'add', component: EditableFormComponent},
{ path: '', redirectTo: '/homepage', pathMatch: 'full' },
{  path: '404', component: NotFoundComponent},
{  path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
