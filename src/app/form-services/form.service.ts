import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class FormService {


  constructor(private httpClient: HttpClient){}
   url=''
  saveOrUpdate(form){
  //   this.httpClient.post(``,
  // {
    
  // })
  // .subscribe(
  //   (data:any) => {
  //     console.log(data);


console.log(JSON.stringify(form));

  //   }
  // )
  }

  get(formId){
    
  }

  list(listFilter){

  }

  submitForm(formId, formData){

  }


}
