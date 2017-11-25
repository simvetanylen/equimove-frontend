import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://127.0.0.1:8080/equimove/api';

@Injectable()
export class LoginService {
	
	constructor(private _http: HttpClient) {

	}

	public login(dto) {
		return this._http.post<any>(`${API_URL}/login`, dto);
	}

	public logout() {
		return this._http.post<any>(`${API_URL}/logout`);
	}
}