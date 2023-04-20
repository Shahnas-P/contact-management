import { Component, OnInit } from '@angular/core';
import { Mycontact } from 'src/modals/Mycontact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {
  allContacts:Mycontact[]=[]
  constructor(private api:ApiService){
    
  }
  ngOnInit(): void {
 this.getAllcontact()
  }
  getAllcontact(){
   //asynchronus
   this.api. getAllContacts()
   .subscribe((result:any)=>{
    console.log(result);
    this.allContacts=result
   })
  }
  //delectContact
  deleteContact(contactId:any){
    this.api.removeContact(contactId)
    .subscribe(
      (result:any)=>{
        console.log(result);
        this.getAllcontact()
        
      }
    )
  }
}
