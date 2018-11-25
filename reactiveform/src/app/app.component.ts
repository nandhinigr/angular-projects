import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    
    get f() { return this.registerForm.controls; }

    onSubmit(registerForm: FormGroup) {
        this.submitted = true;
console.log(this.registerForm.value);
    console.log(registerForm.value.firstName);

        console.log('Name:' + this.registerForm.get('lastName').value);
        
        if (this.registerForm.invalid) {
            return;
        }

        

    }
}