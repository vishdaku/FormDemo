import { Component, OnInit } from '@angular/core';
import { FormService } from '../form-services/form.service';
@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.css'],
  providers:[FormService]
})
export class FormViewerComponent implements OnInit {

  constructor(private formservice:FormService) { }

  public form: Object = {
    name:'',
    group:'',
    description:'',
    components: []
  };

  ngOnInit() {
    //form = this.formservice.get(formId);
    
  }

}
