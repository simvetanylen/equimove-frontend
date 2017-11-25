import { Component } from '@angular/core';
import { HorseService } from '../../services/horse.service';

@Component({
  selector: 'horses-list',
  templateUrl: './horses-list.html'
  //   styleUrls: ['./app.component.css']
})
export class HorsesListComponent {

  search: string
  horses: Array<{ name: string }>
  constructor(private horseService: HorseService) {
    this.horses = [{ name: "Val du lac" }, { name: "Fortune " }, { name: "Val du lac" }]
    // this.horses = this._groupHorses(this.horses)
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
