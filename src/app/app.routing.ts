import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthorizatedGuard } from './guards/authorizated.guard';
import { ListTanksComponent as listT } from './components/list-tanks/list-tanks.component';
import { AddTankComponent as addT } from './components/add-tank/add-tank.component';
import { ListLoadsComponent as listL } from './components/list-loads/list-loads.component';
import { TankHistoryComponent as hist } from './components/tank-history/tank-history.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthorizatedGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'tanks', component: listT, pathMatch: 'full', canActivate: [AuthorizatedGuard] },
  { path: 'add-tank', component: addT, pathMatch: 'full', canActivate: [AuthorizatedGuard] },
  { path: 'list-loads', component: listL, pathMatch: 'full', canActivate: [AuthorizatedGuard] },
  { path: 'history', component: hist, pathMatch: 'full', canActivate: [AuthorizatedGuard] },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

export const Routing = RouterModule.forRoot(appRoutes);
