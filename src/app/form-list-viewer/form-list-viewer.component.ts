import { Component, OnInit } from '@angular/core';
import { FormService, FormListData,MyForm } from '../form-services/form.service';
import {Router} from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-form-list-viewer',
  templateUrl: './form-list-viewer.component.html',
  styleUrls: ['./form-list-viewer.component.css'],
  providers:[FormService]
})
export class FormListViewerComponent implements OnInit {
  formList = [];
  constructor(private formservice:FormService,private router:Router) { }
  ngOnInit() {
    this.formservice.list().subscribe((data:FormListData)=> {
      
      for(var f in data.data)
      {
        this.formList.push(f);
        
      }
      console.log(JSON.stringify(this.formList));
    });
  }
}
