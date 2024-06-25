import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

const locations = [
  {id: 1, country: 'Canada', city: 'Montreal'},
  {id: 2, country: 'Canada', city: 'Toronto'},
  {id: 3, country: 'Canada', city: 'Vancouver'},
];


@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent {
  locations = locations;
  selectedOption = '';
  @Output() selectEvent = new EventEmitter<string>();

  onSelectOption():void {
    console.log(this.selectedOption);
    this.selectEvent.emit(this.selectedOption);
  }
}
