import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
 
logo: string =
"";
disabledMyButton:boolean=false;

  constructor() { }
  sayHello(){
    alert("Hello World");
  }
  ngOnInit() { }

}
