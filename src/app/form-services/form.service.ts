import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { LocalStorage } from '@ngx-pwa/local-storage';
import { identifierModuleUrl } from '@angular/compiler';



interface MyForm{
  name:string,
  id:string,
   group:string,
   description:string,
   components: string[]
 }

@Injectable()
export class FormService {

  formList = [];
  formMap = {};
  formSubmissions = {};
  url = "";

  constructor(private httpClient: HttpClient/*,protected localStorage: LocalStorage*/){}
   
  saveOrUpdate(form){
    this.formList.push(form);
    this.formMap[form.id] = form;
    //this.localStorage.setItem('formList',JSON.stringify(this.formList))
    //console.log(JSON.stringify(this.formMap));

    
  }

  get(formId){
    return  this.formMap[formId];
  }

  list(){
    // if(typeof this.formList==='undefined'){
    //   this.localStorage.getItem<Array<MyForm>>('formList').subscribe((obj)=>{
    //     console.log(JSON.stringify(obj));

    //   });
 
    // }
    return this.formList;
  }

  submitForm(formId, formData){
    if( typeof this.formSubmissions[formId] === undefined ){
      this.formSubmissions[formId] = [];
    }
    this.formSubmissions[formId].push(formData);
  }


}
