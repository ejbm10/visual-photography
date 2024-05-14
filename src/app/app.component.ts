import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Visual Photography';
  author = '👤: Nayeli Ruíz';
  email = '✉️: nayeliruizgranados@gmail.com'
  phone = '📞: 6081-1251'
}
