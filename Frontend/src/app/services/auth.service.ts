import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) { }

  registrar(user: any) {
    return this.http.post<any>(this.URL + '/registrar', user);
  }

  iniciarSesion(user: any) {
    return this.http.post<any>(this.URL + '/iniciarSesion', user);
  }

  iniciarSesionMedico(medico: any) {
    return this.http.post<any>(this.URL + '/iniciarSesionMedico', medico);
  }

  datosPaciente(id: any): Observable<any> {
    return this.http.get(this.URL + '/datosPaciente' + '/' + id);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('correo');
    this.router.navigate(['/home']);
  }

}