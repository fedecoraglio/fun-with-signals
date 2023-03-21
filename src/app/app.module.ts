import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomButtonComponent } from "./custom-button.component";
import { FromObservableComponent } from "./rxjs-interop/from-observable/from-observable.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomButtonComponent,
    FromObservableComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
