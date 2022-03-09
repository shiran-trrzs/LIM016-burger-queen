import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {}

}
