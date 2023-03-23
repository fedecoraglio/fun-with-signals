import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomButtonComponent } from "./custom-button.component";
import { InputExampleComponent } from "./input-example/input-example.component";
import { SignalInputDirective } from "./input-example/signal-input.directive";
import { FromObservableComponent } from "./rxjs-interop/from-observable/from-observable.component";
import { ToObservableComponent } from "./rxjs-interop/to-observable/to-observable.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomButtonComponent,
    FromObservableComponent,
    ToObservableComponent,
    InputExampleComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
