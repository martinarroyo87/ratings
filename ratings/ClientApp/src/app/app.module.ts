import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AccountComponent } from './account/account/account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminGuard } from './admin.guard';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
        FetchDataComponent,
        AccountComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
        { path: 'fetch-data', component: FetchDataComponent },
        { path: 'account', component: AccountComponent},
        
                {
                    path: "usuarios",
                    canActivate: [AdminGuard],
                    loadChildren: () =>
                        import("./account/account.module").then((m) => m.AccountModule),
                },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
