import { Component, OnInit, inject } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import {CommonModule} from '@angular/common';


export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-test',
  template: `
    <h1>Bienvenue dans AppComponent</h1>
    <pre>{{ listData }}</pre>
  `,
  styles: [
    `
      pre {
        white-space: pre-line; /* Ou 'pre-wrap' selon votre besoin */
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  private BackendService = inject(BackendService);
  users = this.BackendService.users;
  listData: string = ''

  ngOnInit() {
    console.log('onInit')
    // this.BackendService.getUsers().subscribe();
    this.BackendService.getList().subscribe((response) => {
      console.log('Response from getList:', response);
      this.listData = response;
    })
    }
  }
