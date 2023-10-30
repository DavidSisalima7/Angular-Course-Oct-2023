import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    
  ],
  exports:[
    MatSliderModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
