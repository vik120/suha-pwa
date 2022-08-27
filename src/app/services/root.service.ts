import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RootHttpService {

  constructor(private http: HttpClient, private router: Router) { }

  get(params: any, data: any): Observable<any> {
    return this.http.get(environment.baseUrlDevelop + params, data)
  }

}
