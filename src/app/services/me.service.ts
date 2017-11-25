import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://127.0.0.1:8080/equimove/api';

@Injectable()
export class MeService {
	
	constructor(private _http: HttpClient) {
	}

	public get() {
		return this._http.get<any>(`${API_URL}/me`);
	}

	public getClaims() {
		return this._http.get<any>(`${API_URL}/me/claims`);
	}
}