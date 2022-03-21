import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService,  } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-chef-view',
  templateUrl: './chef-view.component.html',
  styleUrls: ['./chef-view.component.scss']
})
export class ChefViewComponent implements OnInit {

  @ViewChild('btnStatus')
  btnStatus!: ElementRef;

  // this.inputName.nativeElement.value = '';

  allOrders: any = [];

  arrProducts: any = [];

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {

    this.authService.getOrders().subscribe({
      next: response => {
        this.allOrders = response;
        console.log(this.allOrders)
      },
      error: error => {
        console.error('There was an error!', error);
    }
    })
  }

  changeStatus(e: any) {
    this.allOrders[1].status = 'cooking';
  const type = e.target.id;
  console.log(type)
  console.log(this.allOrders[1].status)
  }
}
