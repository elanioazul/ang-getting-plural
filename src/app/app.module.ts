import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSoacesPipe } from './shared/convert-to-soaces.pipe';
import { StarComponent } from './shared/star/star.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSoacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
