import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    ServerComponent
  ],
  imports: [
    BrowserModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
