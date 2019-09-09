import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routing } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ListadoCartelerasComponent } from './components/listado-carteleras/listado-carteleras.component';
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PairsPipe } from './pipes/pairs.pipe';
import { ListLoadsComponent } from './components/list-loads/list-loads.component';
import { ListTanksComponent } from './components/list-tanks/list-tanks.component';
import { AddTankComponent } from './components/add-tank/add-tank.component';
import { TankHistoryComponent } from './components/tank-history/tank-history.component';
import { AuthorizatedGuard } from './guards/authorizated.guard';
import { StorageService } from './services/storage.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ListadoCartelerasComponent,
    HomeComponent,
    PairsPipe,
    ListLoadsComponent,
    ListTanksComponent,
    AddTankComponent,
    TankHistoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthorizatedGuard, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
