import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactforms',
  templateUrl: './reactforms.component.html',
  styleUrls: ['./reactforms.component.css']
})
export class ReactformsComponent implements OnInit {

 registerForm: FormGroup;

countries = [{'id':1, 'name':'India'}, {'id':2, 'name': 'USA'}, {'id':3, 'name': 'UK'}];
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
              country:''

        });
    }

    
    get f() { 
        return this.registerForm.controls; }

    onSubmit(registerForm: FormGroup) {
        
        console.log(this.registerForm.value);
        console.log(this.registerForm.value.firstName);
        console.log('Name:' + this.registerForm.get('lastName').value);
        if (this.registerForm.invalid) {
            return;
        }
    }
}