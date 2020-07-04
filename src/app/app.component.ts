import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularForm';
  userForm;
  userDetails = [];
  constructor(private fb:FormBuilder) {
    
    this.userForm = this.fb.group({
      'name' : this.fb.control('',Validators.required),
      'email' : this.fb.control('',[
        Validators.required,
        Validators.email
      ]),
      'dob': this.fb.control(new Date(),[Validators.required]),
      'country' : this.fb.control('IN'),
      'gender': this.fb.control('',Validators.required),
      'mar_status': this.fb.control('',Validators.required),
      'fav_food': this.fb.control(''),
      'address' : this.fb.array([
        this.fb.group({
          'street' : this.fb.control('',[Validators.required]),
          'pincode' : this.fb.control('',[Validators.pattern('[0-9]*')]),
          'door_no' : this.fb.control('')
        }),
        this.fb.group({
          'street' : this.fb.control('',[Validators.required]),
          'pincode' : this.fb.control('',[Validators.pattern('[0-9]*')]),
          'door_no' : this.fb.control('')
        }),
        this.fb.group({
          'street' : this.fb.control('',[Validators.required]),
          'pincode' : this.fb.control('',[Validators.pattern('[0-9]*')]),
          'door_no' : this.fb.control('',[Validators.pattern('[0-9]*')])
        })
      ])
    });
  }

  delete(index: number){
    this.userDetails.splice(index, 1);
  }
  submitForm(){
    if(this.userForm.valid){
       console.log(this.userForm.value);
       this.userDetails.push(this.userForm.value)
    }
   }
  
}
