import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-array',
  templateUrl: './reactive-form-array.component.html'
})
export class ReactiveFormArrayComponent implements OnInit {

  name = 'Angular';
  myForm: any;
  arr!: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      arr: this.fb.array([this.createItem()])
    })
  }

  createItem() {
    return this.fb.group({
      name: [''],
      email: ['']
    })
  }

  addItem() {
    this.arr = this.myForm.get('arr') as FormArray;
    this.arr.push(this.createItem());
  }
  removeItem(index: number) {
    const add = this.myForm.get('arr') as FormArray;
    add.removeAt(index)
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

}
