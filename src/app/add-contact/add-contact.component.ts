import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mycontact } from 'src/modals/Mycontact';
import { MYGroup } from 'src/modals/MyGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact:Mycontact={}
  allGroups:MYGroup[]=[]
constructor(private api:ApiService,private router:Router){
  this.contact.groupId = "Select A Group "

}
ngOnInit():void{
  this.api.getAllGroups()
  .subscribe((result:any)=>{
    console.log(result);
    this.allGroups =result
  })
}
addContact(){
  this.api.addContact(this.contact)
  .subscribe(
    (result:any)=>{
      console.log(result);
      //redirect to allContact page
      this.router.navigateByUrl('')
      
    }
  )
  
}
}
