import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { User } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { CarteleraObject } from '../../models/cartelera-object.model';
import { CarteleraService } from '../../services';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  public user: User;
  users: User[] = [];
  error: String;
  loading: Boolean = false;

  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private carteleraService: CarteleraService
  ) { }

  ngOnInit() {
    this.user = this.storageService.getCurrentUser();
    this.loading = true;
    console.log('sepalo bien');
    this.carteleraService.getUsers()
      .subscribe(
        data => {
          this.loading = false;
          this.users = data;
        },
        error => {
          this.error = 'No se pudieron cargar las carteleras';
          this.loading = false;
          console.error(error);
        }
      );
  }

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
