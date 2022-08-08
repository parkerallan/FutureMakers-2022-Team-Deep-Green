import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutbodyComponent } from './components/aboutbody/aboutbody.component';
import { BodyComponent } from './components/body/body.component';

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'about-us', component: AboutbodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
