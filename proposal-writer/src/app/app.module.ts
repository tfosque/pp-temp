import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { SignatureComponent } from './signature/signature.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { LineItemComponent } from './line-item/line-item.component';
import { CoverPhotoComponent } from './cover-photo/cover-photo.component';
import { SummaryComponent } from './summary/summary.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { GoodQuoteComponent } from './quotes/good-quote/good-quote.component';
import { BetterQuoteComponent } from './quotes/better-quote/better-quote.component';
import { BestQuoteComponent } from './quotes/best-quote/best-quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { SubTotalComponent } from './quotes/sub-total/sub-total.component';

@NgModule({
  declarations: [
    AppComponent,
      IntroComponent,
      TermsAndConditionsComponent,
      SignatureComponent,
      AuthorizationComponent,
      LineItemComponent,
      CoverPhotoComponent,
      SummaryComponent,
      LogoComponent,
      HeaderComponent,
      GoodQuoteComponent,
      BetterQuoteComponent,
      BestQuoteComponent,
      QuotesComponent,
      SubTotalComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
