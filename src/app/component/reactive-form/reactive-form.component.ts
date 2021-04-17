import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {

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

  }

  onSubmit() {

    console.log(this.userForm.value)
    this.api.createNewUser(this.userForm.value).subscribe((data) => {
      alert('User Added Successfully!!');
    });

    this.userForm.reset();

  }

}
