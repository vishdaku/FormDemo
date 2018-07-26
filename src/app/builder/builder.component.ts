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
import Prism from 'prismjs';

@Component({
  templateUrl:'./builder.component.html'
})
export class BuilderComponent implements AfterViewInit {
  @ViewChild('json') jsonElement?: ElementRef;
  @ViewChild('code') codeElement?: ElementRef;

  public form: Object = {
    components: []
  };

  onChange(event) {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
  }

  ngAfterViewInit() {
    let formattedCode = Prism.highlight(`import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  templateUrl:'./builder.component.html'
})
export class BuilderComponent {
  @ViewChild('json') jsonElement?: ElementRef;
  public form: Object = {components: []};
  onChange(event) {
    console.log(event.form);
  }
}`, Prism.languages.javascript, 'javascript');
    this.codeElement.nativeElement.innerHTML = formattedCode;
  }
}
