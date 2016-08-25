import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './components/login/login.xml',
    styleUrls: ['./components/login/login.css']
})
export class LoginComponent {

    public login: string = '';
    public password: string = '';

    constructor(private router: Router) {
        
    }

    public submit() {
        this.router.navigate(['main']);
    }
    
}