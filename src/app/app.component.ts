import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registration Form';
  dispname='';
  dispaddress='';
  dispcontact='';
  dispemail='';

  getvalue(name:string,address:string,contact:string,email:string)
  {
    this.dispname=name;
    this.dispaddress=address;
    this.dispcontact=contact;
    this.dispemail=email;
  }
}
