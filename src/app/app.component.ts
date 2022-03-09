import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { DecodeService } from './_services/decode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'my-app';

  tareas: any[] = [];

  constructor (
    private appService: AuthService,
    private decodeService: DecodeService
  ){}

  ngOnInit(): void {
    // this.appService.getAllUsers()
    // .subscribe((data: any) => console.log(this.tareas = data))
  }
}
