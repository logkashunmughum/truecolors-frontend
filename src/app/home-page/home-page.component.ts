import { Component, OnInit } from '@angular/core';
import { GuardsCheckStart, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']

})
export class HomePageComponent{
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
  guest(){
    this.router.navigate([ "/search"]);
  }

  login(){
    this.router.navigate([ "/login"]);
  }

  feedback(){
    this.router.navigate([ "/feedback"]);
  }

  constructor(private router: Router) {
  }
  ngOnInit() {
  }
}
