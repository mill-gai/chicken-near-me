import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { Items } from '../../model/dropdown-item';

@Component({
    selector: 'app-autocomplete',
    standalone: true,
    imports: [AutocompleteLibModule],
    templateUrl: './autocomplete.component.html',
    styleUrl: './autocomplete.component.css',
})
export class AutocompleteComponent {
    @Input() data: Items[];
    @Input() keyword: string;
    @Input() isInvalid: boolean;
    @Output() selectEvent = new EventEmitter<Items>();

    onSelectOption(item): void {
        console.log(item);
        this.selectEvent.emit(item);
    }
    // onSelectOption(): void {
    //     console.log(this.selectedItem.value);
    //     this.selectEvent.emit(this.selectedItem);
    // }
}
