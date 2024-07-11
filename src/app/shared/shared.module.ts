import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//? importamos componentes
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { TitlebarComponent } from './components/titlebar/titlebar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    ProgressbarComponent,
    TitlebarComponent,
    SidebarComponent
  ],
  imports: [ 
    CommonModule,
    MatProgressBarModule
  ],
  exports: [ //? exportamos componentes
    ProgressbarComponent
  ]
})
export class SharedModule { }
