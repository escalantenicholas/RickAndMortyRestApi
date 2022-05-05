import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.page.html',
  styleUrls: ['./characterlist.page.scss'],
})
export class CharacterlistPage implements OnInit {
  
  characters = [];

  constructor(
    private http : HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(res => {
        console.log(res);
        this.characters = res.results;
      })
  }

}
