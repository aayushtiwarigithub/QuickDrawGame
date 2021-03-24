import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.dismiss, .overlay').on('click', function() {
      $('.sidebar').removeClass('active');
      $('.overlay').removeClass('active');
  });

  $('.open-menu').on('click', function(e) {
      e.preventDefault();
      $('.sidebar').addClass('active');
      $('.overlay').addClass('active');
      // close opened sub-menus
      $('.collapse.show').toggleClass('show');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
  }

}
