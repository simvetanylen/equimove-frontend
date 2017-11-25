import { Component } from '@angular/core';
import {HorseService} from '../../services/horse.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'horses-list',
  templateUrl: './horses-list.html'
  //   styleUrls: ['./app.component.css']
})
export class HorsesListComponent {
  search: string
  horses: Observable<any>
  constructor(private horseService: HorseService) {
    horseService.getHorses().subscribe(horses => this.horses = horses);
  }

  filterItems(horses: Array<any>) {
    return this.search ? horses.filter(h => h.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1) : horses
  }

}
