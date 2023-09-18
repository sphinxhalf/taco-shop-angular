import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "LTS Shop"
  isCollapsed = false;

toggleCollapse(): void {
  this.isCollapsed = !this.isCollapsed;
}
constructor(private router: Router) { }

redirectToHome(): void {
this.router.navigate(['/welcome'])
}
}
