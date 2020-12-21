import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class UserService {
  url = "https://coderangersproject.firebaseio.com";

  constructor(private http: HttpClient) {}

  public getUsersById(id: any): Observable<any> {
    return this.http.get(
      `${this.url}/usuarios.json?orderBy="id"&equalTo="${id}"&print=pretty`
    );
  }

  public addUser(mensaje: any): Observable<any> {
    return this.http.post(`${this.url}/usuarios.json`, mensaje);
  }

  public deleteUser(id: any): Observable<any> {
    return this.http.delete(`${this.url}/usuarios/${id}.json`);
  }

  public getUser(): Observable<any> {
    return this.http.get(`${this.url}/usuarios.json`);
  }

  public updateUser(id: any, product: any): Observable<any> {
    return this.http.put(`${this.url}/usuarios/${id}.json`, product);
  }
}