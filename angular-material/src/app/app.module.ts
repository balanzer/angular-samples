import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';


//hammerjs
import  'hammerjs'

//Material 
import { MatButtonModule, MatCheckboxModule } from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Sidenav
import {MatSidenavModule} from '@angular/material/sidenav';

//Input
import {MatInputModule} from '@angular/material/input';

//Menu 
import {MatMenuModule} from '@angular/material/menu';

//toolbar
import {MatToolbarModule} from '@angular/material/toolbar';

//icon
import {MatIconModule} from '@angular/material/icon';

// stepper
import {MatStepperModule} from '@angular/material/stepper';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
     FormsModule, ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule,BrowserAnimationsModule,
    MatSidenavModule, MatInputModule, MatMenuModule, MatToolbarModule,
    MatIconModule, MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
