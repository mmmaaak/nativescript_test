import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'ui/page';
import { Color } from 'color';


@Component({
    selector: 'main',
    templateUrl: './components/main/main.xml'
})
export class MainComponent {

    constructor(
        private router: Router, 
        private page: Page) {

    }

    ngOnInit() {
        this.page.actionBar.navigationButton = null;
    }
}