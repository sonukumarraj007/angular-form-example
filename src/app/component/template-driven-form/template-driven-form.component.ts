import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
})
export class TemplateDrivenFormComponent implements OnInit {

  userModel: any = {};
  topics = ['Angular', 'React', 'Vue'];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(JSON.stringify(this.userModel));
    this.api.createNewUser(this.userModel).subscribe((data) => {
      alert('User Added Successfully!!');
    })

  }

}
