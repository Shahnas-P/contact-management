import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mycontact } from 'src/modals/Mycontact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
 contactId:any
 contact:Mycontact={}
groupId:string =""
groupName:string=""
constructor(private api:ApiService,private activatedRoute:ActivatedRoute){
}
ngOnInit(): void {
  //to get path parameter from url
  this.activatedRoute.params
  .subscribe((data:any)=>{
    console.log(data['id']);
   this.contactId = data['id'] 
  })
  //2.call api to get details of a particular contact
  this.api.viewContact(this.contactId)
  .subscribe((result:any)=>{
    console.log(result);
    this.contact = result
    this.groupId=result.groupId
    console.log(this.groupId  );
     //api call to get details of a particular group
  this.api.getGroup(this.groupId)
  .subscribe((result:any)=>{
    console.log(result);
    this.groupName=result.name
    
  })
  })
 
}
}

