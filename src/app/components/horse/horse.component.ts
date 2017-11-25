import { Component } from '@angular/core';
import {HorseService} from '../../services/horse.service';
import {Observable} from 'rxjs';

@Component({
	selector: 'horse',
	templateUrl : './horse.html'
})
export class HorseComponent {
	horse: Observable<any>
	constructor(private horseService: HorseService) {
		horseService.getHorse(1).subscribe(horse => this.horse = horse);
	}
}