import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FormsModule }                  from '@angular/forms'
import { ReactiveFormsModule }          from '@angular/forms';
import { Title }                        from '@angular/platform-browser';
import { HttpClientModule }             from '@angular/common/http';
import { HttpModule }                   from '@angular/http';

// Services
    import { ApiService }           from './services/api.service';
    // import { constants }            from './services/constants.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavsComponent } from './components/navs/navs.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { OrgCreateComponent } from './components/org-create/org-create.component';
import { OrgListComponent } from './components/org-list/org-list.component';
import { SubOrgCreateComponent } from './components/sub-org-create/sub-org-create.component';
import { SubOrgListComponent } from './components/sub-org-list/sub-org-list.component';
import { LoginComponent } from './components/login/login.component';
import { Header1Component } from './components/header-1/header-1.component';



const appRoutes:Routes = [
  {path:'',component:LoginComponent},
  {path:'client-profile',component:ClientProfileComponent},
  {path:'org-create',component:OrgCreateComponent},
  {path:'org-list',component:OrgListComponent},
  {path:'sub-org-create',component:SubOrgCreateComponent},
  {path:'sub-org-list',component:SubOrgListComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavsComponent,
    FooterComponent,
    ClientProfileComponent,
    OrgCreateComponent,
    OrgListComponent,
    SubOrgCreateComponent,
    SubOrgListComponent,
    LoginComponent,
    Header1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    
    HttpClientModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
