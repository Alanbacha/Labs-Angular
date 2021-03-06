import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { UnderstandingAngularComponent } from "./understanding-angular/understanding-angular.component";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { EmployeeService } from "./employee.service";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    UnderstandingAngularComponent,
    EmployeeDetailComponent,
    routingComponents,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
