import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSoacesPipe } from './shared/convert-to-soaces.pipe';
import { StarComponent } from './shared/star/star.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSoacesPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
