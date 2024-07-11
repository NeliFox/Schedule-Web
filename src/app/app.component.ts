import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  @Input() componenteHijo : any = null;
  
  title = 'ScheduleWeb';
  user : any;

  constructor(private http: HttpClient) {

  }

  async ngOnInit() {
    this.http.get('https://localhost:7082/Auth/get-all-users').subscribe((data) => {
      this.user = data;
      console.log(data);
    });
  }
  
}
