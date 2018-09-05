import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    backdrop: string = 'normal';
    height: number = 0;

    @ViewChild('normal') normal: ElementRef;
    @ViewChild('list') list: ElementRef;
    @ViewChild('filters') filters: ElementRef;
    @ViewChild('front') front: ElementRef;

    constructor() {

    }

    ngOnInit() {
        setTimeout( () => {
            this.setHeight(this.normal.nativeElement.offsetHeight);
        },20);
    }

    setHeight(elHeight) {
        this.height = window.innerHeight - elHeight;
    }

    show(name) {
        this.backdrop = name;
        setTimeout( () => {
            this.setHeight(this[name].nativeElement.offsetHeight);
        },20);
    }

}
