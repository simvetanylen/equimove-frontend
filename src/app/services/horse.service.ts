import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = "";

@Injectable()
export class HorseService {

    constructor(private _http: HttpClient) { }

    public getHorses() {
        return this._http.get(`${API_URL}/horses`)
    }

}