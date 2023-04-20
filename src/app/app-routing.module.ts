import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
//path set up for component
const routes: Routes = [
  //path AllContactsComponent
  {
    path:'',component:AllContactsComponent
  },
  {
    //path AddContactComponent
    path:'add-contact',component:AddContactComponent
  },
  {
    //path EditContactComponent-localhost4200/edit-contact/2
    path:'edit-contact/:id',component:EditContactComponent
  },
  {
    //path ViewContactComponent-localhost4200/view-contact/2
    path:'view-contact/:id',component:ViewContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
