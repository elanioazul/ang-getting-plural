import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';
import { ConvertToSoacesPipe } from './convert-to-soaces.pipe';



@NgModule({
  declarations: [
    StarComponent,
    ConvertToSoacesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    ConvertToSoacesPipe
  ]
})
export class SharedModule { }
