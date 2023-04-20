import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mycontact } from 'src/modals/Mycontact';
import { MYGroup } from 'src/modals/MyGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{
  contactId:any;
  contact:Mycontact={}
  groupId:string=''
  groupName:string=''
  groups:MYGroup[]=[];
constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private router:Router){
}
ngOnInit(): void {
  //to fetch contactId from URL 
  this.activatedRoute.params.subscribe(
    (data:any)=>{
      this.contactId = data['id']
      console.log(this.contactId);
      
    }
  )
//to fetch data of that particular id
if(this.contactId){
  this.api.viewContact(this.contactId).subscribe(
    (result:any)=>{
      console.log(result);
      this.contact = result
      this.groupId = result.groupId
      console.log(this.groupId);
      //to fetch details of a particular group 
      this.api.getGroup(this.groupId).subscribe((data:any)=>{
        console.log(data);
        this.groupName = data['name']
        // console.log(this.groupName);
        
        
      })
      //to fetch all group 
      this.api.getAllGroups().subscribe((result:any)=>{
        this.groups = result
        
      })

    }
  )
}


}
// editContact(contact)
editContact(contact:MYGroup){
this.api.updateContact(this.contactId,contact).subscribe(
  (result:any)=>{
    console.log(result);
    alert('Contact updated successfully.....')
    this.router.navigateByUrl('')
    
  }
)
}
}

