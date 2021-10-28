import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './trangchu/home/home.component';
import {FontSizeComponent} from './font_size/font-size/font-size.component';
import {FormloginComponent} from './register/formlogin/formlogin.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'font', component: FontSizeComponent},
  {path: 'register', component: FormloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
