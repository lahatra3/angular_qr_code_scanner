import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qr_code_scanner';
  output!: string;

  onError(e: any): void {
    alert(e);
  }
}
