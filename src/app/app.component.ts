import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  
  constructor(private route: ActivatedRoute,
    private router: Router){}
   
  gotoList()
  {
    this.router.navigate(['/view-employee']);
    
  }
}
