import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function() {
      $(document).on('mousemove', function(e) {
        $('#circularcursor').css({
          left: e.pageX,
          top: e.pageY
        });
      })
    });
  }
}
