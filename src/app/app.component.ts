import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'burgerland';

  tareas: any[] = [];

  constructor (
    private appService: AuthService,
  ){}

  ngOnInit(): void {
   
  }
}
