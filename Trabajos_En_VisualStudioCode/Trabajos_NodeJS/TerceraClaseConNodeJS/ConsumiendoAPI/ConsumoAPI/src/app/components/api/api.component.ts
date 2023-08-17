import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  data: any[] = [];
  constructor(private apiService: OnInit){}

  ngOnInit(): void {
    this.TraerData();
  }
  TraerData(){
    this.apiService.getData().subscribe(data =>{
      this.data = data.results;
      console.log(this.data);
    })
  }

}
