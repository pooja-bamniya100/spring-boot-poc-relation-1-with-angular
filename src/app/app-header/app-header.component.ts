import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  token= this.route.snapshot.params['token'];
  id= this.route.snapshot.params['id'];
  ngOnInit(): void {
  }

}
