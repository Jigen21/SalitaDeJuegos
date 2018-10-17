import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salita',
  templateUrl: './salita.component.html',
  styleUrls: ['./salita.component.css']
})
export class SalitaComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {
  }

  primero()
    {
      location.href = "./primero";
      //this.router.navigate(['/primero']);
    }

    segundo()
    {

     // this.router.navigate(['/segundo']);
     location.href = "./segundo";
    }

    tercero()
    {
     // this.router.navigate(['/tercero']);
     location.href = "./tercero";

    }

    cuarto()
    {
      //this.router.navigate(['/cuarto']);
      location.href = "./cuarto";
    }

}
