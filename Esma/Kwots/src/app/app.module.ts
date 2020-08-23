import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FormComponent } from './form/form.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { HighlightQuoteDirective } from './highlight-quote.directive';
import { DatePipePipe } from './date-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FormComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    HighlightQuoteDirective,
    DatePipePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
