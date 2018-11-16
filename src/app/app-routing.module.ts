import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WebcamComponent } from './components/webcam/webcam.component';

const routes: Routes = [
  { path: '', redirectTo: 'webcam', pathMatch: 'full' },
  { path: 'webcam',component: WebcamComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
