import { Component, Input, OnInit, inject } from '@angular/core';
import { MapAdvancedMarker } from '@angular/google-maps';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Image } from '../../model/image';
import { Position } from '../../model/position';
import { ImageService } from '../../services/image/image.service';
import { coord } from '../../constants/locations';

@Component({
    selector: 'app-map-marker',
    standalone: true,
    imports: [MapAdvancedMarker, FontAwesomeModule],
    templateUrl: './map-marker.component.html',
    styleUrl: './map-marker.component.css',
})
export class MapMarkerComponent implements OnInit {
    private readonly imageService = inject(ImageService);
    @Input() country: string;
    @Input() city: string;
    @Input() images: Image[];
    position: Position;
    imgUrls: string[];
    showContent: boolean = false;
    faCircleXmark = faCircleXmark;

    ngOnInit(): void {
        if (this.country in coord && this.city in coord[this.country]) {
            this.position = coord[this.country][this.city];
        } else {
            this.position = { lat: 50, lng: -72 };
        }

        console.log(
            'country: ' +
                this.country +
                ', city: ' +
                this.city +
                ', position: ' +
                this.position
        );
    }

    getImageUrl(fileNames: string[]) {
        this.imageService.getImageUrls(fileNames).subscribe((response) => {
            this.images.forEach(
                (value, index) => (value.fileUrl = response[index])
            );
        });
    }

    onClickHandler() {
        const fileNames: string[] = this.images.map((i) => i.fileName);
        this.getImageUrl(fileNames);
        console.log(this.images);
        this.showContent = !this.showContent;
    }
}
