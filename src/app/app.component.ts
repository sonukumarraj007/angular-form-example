import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userModel : any = {};
  topics = ['Angular', 'React', 'Vue'];

  onSubmit() {
    alert('data submited...');
   console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.userModel));
 }

}
