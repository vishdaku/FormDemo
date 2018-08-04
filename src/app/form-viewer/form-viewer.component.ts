import { Component, OnInit } from '@angular/core';
import { FormService, MyForm } from '../form-services/form.service';
import { ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.css'],
  providers: [FormService]
})

export class FormViewerComponent {

  form: MyForm = null;

  constructor(private formService: FormService, private route: ActivatedRoute) {
   this.route.params.subscribe(res => this.loadForm(res.formId));
  }

  setForm(form) {
    this.form = form.data[0];
    console.log(form);
  }

  loadForm(formId) {
    this.formService.get(formId).subscribe(form => this.setForm(form));
  }

}
