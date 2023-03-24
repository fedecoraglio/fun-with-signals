import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomButtonComponent } from "./custom-button.component";
import { GithubUsersComponent } from "./github-users/github-users.component";
import { SpinnerComponent } from "./github-users/spinner.component";
import { InputExampleComponent } from "./input-example/input-example.component";
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
    GithubUsersComponent,
    SpinnerComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
