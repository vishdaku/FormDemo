import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//This is http post method defined
//   constructor(private httpClient: HttpClient){}

// onChange(event:any)
// {
// console.log(event.target.value);
// }
  
// Submit(){
//   this.httpClient.post(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`,
//   {
//     
//   })
//   .subscribe(
//     (data:any) => {
//       console.log(data);
//     }
//   )
// }



  title = 'app';
}
