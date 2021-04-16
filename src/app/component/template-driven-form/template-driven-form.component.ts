import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  userModel: any = {};
  topics = ['Angular', 'React', 'Vue'];
  subscribe: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('data submited...');
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.userModel));
  }

}
