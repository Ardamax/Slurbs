import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

/*
  let firebaseConfig = {
  }
  let app = initializeApp(this.firebaseConfig);
  let db = getFirestore(app);
  */
  public appPages = [
    { title: 'Inbox', url: '/members/landing/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/members/landing/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/members/landing/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/members/landing/Archived', icon: 'archive' },
    { title: 'Trash', url: '/members/landing/Trash', icon: 'trash' },
    { title: 'Spam', url: '/members/landing/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  async initializeApp() {

  }
}
