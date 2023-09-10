import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BungieService {
    private apiUrl = 'https://localhost:443/api/bungie/user-info';

    constructor(private http: HttpClient) {}

    getCurrentBungieUser(userToken: string): Observable<any> {
        const headers = new HttpHeaders().set('userToken', userToken);
        return this.http.get(this.apiUrl, { headers: headers });
    }
}