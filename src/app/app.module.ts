import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule, MatSliderModule} from "@angular/material";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatSliderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
