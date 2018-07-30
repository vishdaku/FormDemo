import { Component, OnInit } from '@angular/core';
import { FormService } from '../form-services/form.service';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-type',
  templateUrl: './form-type.component.html',
  styleUrls: ['./form-type.component.css'],
  providers:[FormService]
})
export class FormTypeComponent {
  loading = false;
  submitted = false;
   
                    // A property for our submitted form
  description:string = '';
  name:string = '';
  type:string ='abc1';

  titleAlert:string = 'This field is required';

constructor(private formBuilder: FormBuilder,
  private router: Router) {}


// ngOnInit() {

//   // this.rForm.get('validate').valueChanges.subscribe(
//   //   (validate) => {
//   //     if (validate == '1') {
//   //       this.rForm.get('name').setValidators([Validators.required, Validators.minLength(6)]);
//   //       this.titleAlert = "You need to specify at least 6 characters";
//   //     } else {
//   //       this.rForm.get('name').setValidators(Validators.required);
//   //     }
//   //     this.rForm.get('name').updateValueAndValidity();
//   //   }
//   // )

//   this.rForm = this.formBuilder.group(
//     {
//       name: ['',Validators.required],
//       description: ['',[Validators.required,Validators.minLength(10)]]
//     }
//   );
// }

onSubmit()
{
  this.router.navigate(['/builder']);
}


  

}
