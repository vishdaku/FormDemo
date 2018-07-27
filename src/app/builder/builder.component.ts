// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-builder',
//   templateUrl: './builder.component.html',
//   styleUrls: ['./builder.component.css']
// })
// export class BuilderComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }



import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';


import { FormService } from '../form-services/form.service';

@Component({
  templateUrl:'./builder.component.html',
  providers:[FormService]
})
export class BuilderComponent implements AfterViewInit {
  @ViewChild('json') jsonElement?: ElementRef;
  @ViewChild('code') codeElement?: ElementRef;

  constructor(private formservice:FormService){}

  public form: Object = {
    components: []
  };

  onChange(event) {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    
    this.formservice.saveOrUpdate(event.form);
  }

   ngAfterViewInit() {
   }



}
