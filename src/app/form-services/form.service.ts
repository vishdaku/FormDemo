import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
const _headers = new HttpHeaders();
const headers = _headers.append('Content-Type', 'application/json')
                        .append('...', '...')
                        .append('...', '...');
export interface MyForm{
  name:string,
  id:string,
   group:string,
   description:string,
   components: string[]
 }
export interface FormListData
 {
   data:MyForm[]

 }

@Injectable()
export class FormService {

  formList = [];
  
  formSubmissions = {};
  url = '';
  

  constructor(private http: HttpClient){}
   
  saveOrUpdate(form){
    this.formList.push(form);

   

    
    
    this.http.post("https://vassist-211503.appspot.com/api/form",form,{headers: headers})
    .subscribe(data => console.log(data));
  }
    
  


    

  // get(formId){
  //   return  this.formMap[formId];
  // }

   list(){
    return this.http.get<FormListData>('https://vassist-211503.appspot.com/api/form/list');
  }

  submitForm(formId, formData){
    if( typeof this.formSubmissions[formId] === undefined ){
      this.formSubmissions[formId] = [];
    }
    this.formSubmissions[formId].push(formData);
  }
}


