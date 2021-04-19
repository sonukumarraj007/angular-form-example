import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormControl, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-array-patch-value',
  templateUrl: './reactive-form-array-patch-value.component.html'
})
export class ReactiveFormArrayPatchValueComponent implements OnInit {

  bins: any[] = [
    {
      id: '101-Test',
      system: 'test-system',
      shape: 'round'
    },
    {
      id: '102-Test',
      system: 'test-system',
      shape: 'round'
    }
  ];
  binsForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.binsForm = this.setUpForm(this.bins);
    this.binsForm.patchValue(this.bins);
  }

  setUpForm(bins: any[]) {
    return new FormGroup({
      bins: new FormArray(bins.map((bin) => this.createBin(bin)))
    });
  }

  get binsFormArray() {
    return (this.binsForm.get('bins') as FormArray);
  }

  addBin() {
    let newBin = {};
    this.bins.push(newBin);
    this.binsFormArray.push(this.createBin(newBin));
  }

  save() {
    console.log(this.binsForm.value);
  }

  createBin(bin: any) {
    return new FormGroup({
      id: new FormControl(bin.id || ''),
      system: new FormControl(bin.system || ''),
      shape: new FormControl(bin.shape || '')
    })
  }

}
