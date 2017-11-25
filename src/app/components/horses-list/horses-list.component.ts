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
  // horses: Observable<any>
  horses: Array<any>
  constructor(private horseService: HorseService) {
    // horseService.getHorses().subscribe(horses => this.horses = horses);
    this.horses = [{name: "Val du"}, {name: "Val du tutu"}, {name: "Fortune"}]
  }

  // _groupHorses(horses:Array<any>) {
  //   let res = horses
  //   while (res.length > 0)
  //   res.push(res.splice(0, 3));
  //   return res
  // }
  filterItems(horses: Array<any>) {
    return this.search ? horses.filter(h => h.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1) : horses
  }

  onItemClicked(horse: any) {
    console.log("HORSE ", horse)
  }

}
