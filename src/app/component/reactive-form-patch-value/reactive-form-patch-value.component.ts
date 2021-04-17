import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-reactive-form-patch-value',
  templateUrl: './reactive-form-patch-value.component.html'
})
export class ReactiveFormPatchValueComponent implements OnInit {

  id: string = "1";
  userForm: any;
  topics = ['Angular', 'React', 'Vue'];

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    // user form
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      userEmail: ['', Validators.required],
      phone: ['', Validators.required],
      topic: ['', Validators.required],
      timePreference: ['', Validators.required],
      subscribe: ['', Validators.required],
    });

    this.api.getSingleUser(this.id).subscribe((res) => {
      console.log("Single User : ", res)

      this.userForm.patchValue({
        name: res.name,
        userEmail: res.userEmail,
        phone: res.phone,
        topic: res.topic,
        timePreference: res.timePreference,
        subscribe: res.subscribe
      });

    });

  }

  onSubmit() {
    console.log(JSON.stringify(this.userForm.value));
    this.api.updateSingleUser(this.id, this.userForm.value).subscribe((data) => {
      alert('User Updated Successfully!!');
    })
  }

}
