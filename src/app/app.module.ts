import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from 'src/app/employees/employee/employee.component';
import { EmployeeListComponent } from 'src/app/employees/employee-list/employee-list.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AccordiansComponent } from './accordians/accordians.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { OopsComponent } from './oops/oops.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    AccordiansComponent,
    CheckboxComponent,
    OopsComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFontAwesomeModule,
    ToastrModule.forRoot(),
    TabsModule.forRoot(),
    ReactiveFormsModule,
    ButtonsModule.forRoot(),
    AccordionModule.forRoot(),



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 