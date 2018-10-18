import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-salita',
  templateUrl: './salita.component.html',
  styleUrls: ['./salita.component.css']
})
export class SalitaComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() 
  {
  }

  primero()
    {
      //location.href = "./primero";
      this.router.navigate(['/primero']);
      //this.router.navigate(['/primero']);
    }

    segundo()
    {

     // this.router.navigate(['/segundo']);
    // location.href = "./segundo";
    this.router.navigate(['/segundo']);
    }

    tercero()
    {
     // this.router.navigate(['/tercero']);
    // location.href = "./tercero";
     this.router.navigate(['/tercero']);

    }

    cuarto()
    {
      //this.router.navigate(['/cuarto']);
      //location.href = "./cuarto";
      this.router.navigate(['/cuarto']);
    }

}
