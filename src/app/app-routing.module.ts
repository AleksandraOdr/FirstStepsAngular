import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
  msg: string = 'Witaj Aleksandro';
  var: number = 1;
  


  /**
   *
   */
  constructor() {

  
      console.log(this.msg);
   

  }



 }
