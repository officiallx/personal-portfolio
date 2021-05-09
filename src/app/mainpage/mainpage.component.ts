import { Component, OnInit } from '@angular/core';
import TypeIt from 'typeit';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new TypeIt('#companionMethods', {
      speed: 50,
      waitUntilVisible: true
    })
      .type('Nvver', {delay: 1000})
      .move(-3)
      .delete(1)
      .type('e')
      .move('END')
      .type(' let yees')
      .pause(300)
      .delete(2)
      .type('sterday use up to muc')
      .move(-4)
      .type('o')
      .move('END')
      .type('h of today.')
      .pause(500)
      .break({delay: 500})
      .break({delay: 1000})
      .type('<em>- Will Rogers</em>')
      .go();
  }

}
