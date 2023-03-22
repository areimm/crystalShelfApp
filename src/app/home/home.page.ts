import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loaded = false;
  shelves: any = [
    {
      title: 'Shelf 1',
      icon: 'mail',
      value: 'lorem ipsum dolor sit amet '
    },
  ];
  cardinfos : any = [
    {
      title: '15',
      icon: 'people-outline',
      value: 'Online Users'
    },
    {
      title: '189',
      icon: 'albums-outline',
      value: 'Shelves'
    },
    {
      title: '12',
      icon: 'hardware-chip-outline',
      value: 'Empty Shelves'
    },
    {
      title: '1',
      icon: 'notifications-off-outline',
      value: 'Notifications'
    },
  ];
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 500);
  }

}
