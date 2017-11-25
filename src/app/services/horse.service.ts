import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://127.0.0.1:8080/equimove/api';

@Injectable()
export class HorseService {

    constructor(private _http: HttpClient) { }

    public getHorses() {
        return this._http.get<any>(`${API_URL}/horses`);
    }

    public getHorse(pk) {
    	return this._http.get<any>(`${API_URL}/horses` + pk);
    }

    public createHorse(dto) {
    	return this._http.post<any>(`${API_URL}/horses`, dto);
    }

    public createClaimHorse(horsePk, dto) {
    	return this._http.post<any>(`${API_URL}/horses/` + horsePk 
    	 `/claims`, dto);
    }

}
