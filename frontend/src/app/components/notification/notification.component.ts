import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  firstTime : boolean = true;
  message : string;
  playAnimation(message: string) {
    this.message = message;
    const notiElement = document.getElementById('noti');
    const barElement = document.getElementById('bar');
    if(this.firstTime){
      notiElement.classList.remove('animate-none');
      barElement.classList.remove('animate-none');
      this.firstTime = false;
    } else {
      notiElement.classList.remove('animate-notification');
      barElement.classList.remove('animate-progressBar');
    }
    void notiElement.offsetWidth;
    void barElement.offsetWidth;
    notiElement.classList.add('animate-notification');
    barElement.classList.add('animate-progressBar');
  }
}
