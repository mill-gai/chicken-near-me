import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';
import { Items } from '../../model/dropdown-item';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent {
  // locations = locations;
  selectedOption = '';
  @Input() options: Items[] = [];
  @Output() selectEvent = new EventEmitter<string>();

  onSelectOption():void {
    console.log(this.selectedOption);
    this.selectEvent.emit(this.selectedOption);
  }
}
