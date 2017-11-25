import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = "http://127.0.0.1:8080/equimove/api";

@Injectable()
export class HorseService {

    constructor(private _http: HttpClient) { }

    public getHorses() {
        return this._http.get(`${API_URL}/horses`)
    }

}
