import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  mensaje: string= "Mejoramos la calidad de servicio"
  color: string= "background-color: red !important;"
  ngOnInit(): void {
  
  }

}
