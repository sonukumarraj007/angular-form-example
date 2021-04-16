import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-patch-value',
  templateUrl: './template-driven-form-patch-value.component.html'
})
export class TemplateDrivenFormPatchValueComponent implements OnInit {

  id: string = "1";
  userModel: any = {};
  topics = ['Angular', 'React', 'Vue'];

  constructor(private __api: ApiService) { }

  ngOnInit(): void {

    this.__api.getUserList().subscribe((data) => {
      console.log("User List : ", data)
    });


    this.__api.getSingleUser(this.id).subscribe((data) => {
      console.log("Single User : ", data)
      this.userModel = data;
    });

  }

  onSubmit() {
    console.log(JSON.stringify(this.userModel));
    this.__api.updateSingleUser(this.id, this.userModel).subscribe((data) => {
      alert('User Updated Successfully!!');
    })
  }

}
