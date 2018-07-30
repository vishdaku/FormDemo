

import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import {Router} from '@angular/router'
import { FormService } from '../form-services/form.service';




interface MyForm{
  name:string,
  id:string,
   group:string,
   description:string,
   components: string[]
 }

@Component({
  selector: 'custom-form-builder',
  templateUrl:'./builder.component.html',
  providers:[FormService]
})
export class BuilderComponent implements AfterViewInit {
  @ViewChild('json') jsonElement?: ElementRef;
  @ViewChild('code') codeElement?: ElementRef;


 
  constructor(private formservice:FormService,private router:Router){}

  public form: MyForm= {
    name:'',
   id:'',
    group:'',
    description:'',
    components: []
  };

  onChange(event) {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    
    this.formservice.saveOrUpdate(event.form);
  }

   ngAfterViewInit() {
   }

   save() {
     this.form.id = this.form.name;
    this.formservice.saveOrUpdate(this.form);
    this.router.navigate(['/form-list-viewer']);
  }



}
