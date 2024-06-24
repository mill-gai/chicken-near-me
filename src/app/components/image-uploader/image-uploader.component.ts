import { Component, OnInit, ElementRef ,Input } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [],
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.css'
})
export class ImageUploaderComponent implements OnInit{
  @Input() formControlName: any = "";

  constructor(private elementRef: ElementRef){}
  ngOnInit(): void {
  }
}
