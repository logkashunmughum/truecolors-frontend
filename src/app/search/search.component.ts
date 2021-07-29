import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchRestaurent(){
    var restaurent = (document.getElementById("restaurantName") as HTMLInputElement).value;
    var city = (document.getElementById("cityName") as HTMLInputElement).value;
    console.log(restaurent);
    console.log(city);
    if(restaurent!=""){
      this.router.navigate([ "/reviews" ])
    }
    else if (city!= ""){
      alert(city)
      this.router.navigate([ "/cities" ])
    }
    else{
      alert("Please enter the restaurant name or city!");
    }

  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
