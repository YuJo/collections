import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiMiddlewareService } from './api-middleware.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { I18nButtonComponent } from './shared/i18n-button/i18n-button.component';
import { StoreSectionComponent } from './shared/store-section/store-section.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MainPageComponent } from './main-page/main-page.component';
import { SelectAmountComponent } from './select-amount/select-amount.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    I18nButtonComponent,
    StoreSectionComponent,
    MainPageComponent,
    SelectAmountComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [ApiMiddlewareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
