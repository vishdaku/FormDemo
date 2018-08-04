import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormService } from '../form-services/form.service';

interface MyForm{
  name: string,
  id: string,
   group: string,
   description: string,
   clientForm: {components:string[]},
   agentForm: {components:string[]}
 }

@Component({
  selector: 'custom-form-builder',
  templateUrl:'./builder.component.html',
  providers: [FormService]
})
export class BuilderComponent implements AfterViewInit {
  @ViewChild('json') jsonElement?: ElementRef;
  @ViewChild('code') codeElement?: ElementRef;


 
  constructor(private formservice: FormService, private router: Router) {}

    public form: MyForm = {
      name: '',
      id: '',
      group: '',
      description: '',
      clientForm: {components:[]},
      agentForm: {components: []}
    };

    public previewForm = {components:[]};

    initPreview(formName) {
      if (formName === 'client') {
        this.previewForm = this.form.clientForm;
      }
      else{
        this.previewForm = this.form.agentForm;
      }
    }

    resetPreview() {
      this.previewForm =   {components: []};
    }

    ngAfterViewInit() {
    }

    save() {
      // this.form.id = this.form.name;
      this.formservice.saveOrUpdate(this.form).subscribe(data => console.log(data));
      this.router.navigate(['/form-list-viewer']);
    }



}
