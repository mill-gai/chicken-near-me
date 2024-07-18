import { Component, OnInit, ElementRef ,Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.css'
})
export class ImageUploaderComponent implements OnInit{
  @Input() formControlName: any = "";

  faImage = faImage;
  constructor(private elementRef: ElementRef){}
  ngOnInit(): void {
  }
}
