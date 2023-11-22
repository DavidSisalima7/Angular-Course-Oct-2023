import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnDestroy {

  ngOnDestroy(): void {
    console.log("Ejecutado Destroy");
  }

}
