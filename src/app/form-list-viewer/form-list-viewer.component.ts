import { Component, OnInit } from '@angular/core';
import { FormService } from '../form-services/form.service';
import {Router} from '@angular/router';

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
    for (let form of this.formservice.list()) {
      this.formList.push(form) ;   
    }
  }
}
