import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
