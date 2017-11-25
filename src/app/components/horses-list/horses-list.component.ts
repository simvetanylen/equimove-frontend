import { Component } from '@angular/core';

@Component({
  selector: 'horses-list',
  templateUrl: './horses-list.html'
  //   styleUrls: ['./app.component.css']
})
export class HorsesListComponent {

  search: string
  horses: Array<{ name: string }>
  constructor() {
    this.horses = [{ name: "Val du lac" }, { name: "Fortune " }]
  }

  filterItems(horses: Array<any>) {
    return this.search ? horses.filter(h => h.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1) : horses
  }

}
