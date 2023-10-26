import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //Copyrigth
  copyrigth:string="©Copyrigth 2023 | Good vibes"

  //Array de objetos para footer
  footer:any=[
    {
      title:'Features',
      options:[
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Stuff for developers',
        'Another one',
        'Last time'
      ]
    },
    {
      title:'Resources',
      options:[
        'Resource',
        'Resource name',
        'Another resource',
        'Final resource',
      ]
    },
    {
      title:'About',
      options:[
        'Team',
        'Locations',
        'Privacy',
        'Terms',
       ]
    }
  ]

  
  constructor() { }

  ngOnInit(): void {
  }

}
