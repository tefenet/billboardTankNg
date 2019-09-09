/**
 * Created by xavi on 5/16/17.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../models/session.model';
import { User } from '../models/user.model';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class StorageService {

  private localStorageService: Storage;
  private currentSession: User = null;

  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }

  setCurrentSession(user: HttpResponse<any>) {
    const nuevoUsuario = {
      'username': user.body.username,
      'profile': user.body.perfil,
      'token': user.body.token
    };
    this.currentSession = nuevoUsuario;
    this.localStorageService.setItem('currentUser', JSON.stringify(nuevoUsuario));
  }

  loadSessionData(): User {
    console.log('aqui estai');
    const sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? <User>JSON.parse(sessionStr) : null;
  }

  getCurrentSession(): User {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null;
  }

  getCurrentUser(): User {
    return this.getCurrentSession();
  }

  isAuthenticated(): boolean {
    console.log('StorageService2');
    return (this.getCurrentToken() != null) ? true : false;
    // return false;
  }

  getCurrentToken(): string {
    if (this.getCurrentSession() != null) {
      return this.getCurrentSession().token;
    } else {
      return null;
    }
  }

  logout(): void {
    console.log('storages22');
    this.removeCurrentSession();
    this.router.navigate(['/']);
  }

}
