import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  routeToFeedback(){
    this.router.navigate([ "/feedback" ])
  }
  constructor(private router: Router) { }
  resultJson = [
    {
        "id": "60db6e747d0b4e43d6bd25a2",
        "reviewer_name": "Rahel",
        "comments": "Mein Freund und ich hatten gute gemütliche vier Nächte in Jans Studio. Es ist unfassbar ruhig und hat sogar ein gedämpftes Klavier für Leute die gerne spielen. Die Lage ist hervorragend und es gibt in der Strasse einen tollen alimentari und eine günstige weinerei. Das Bad ist sehr alt aber funktionstüchtig und der insgesamte Standard ist ok, ein wenig chaotisch aber dafür hat man das Gefühl man ist bei jemandem zuhause ! Jan ist ein aufgeschlossener lustiger Mann und auch um frische Handtücher und sonstiges bemüht! Wir danken.",
        "listing_id": 2015,
        "reviewer_id": 7178145,
        "date": "11-04-2016"
    },
    {
      "id": "60db6e747d0b4e43d6bd25a3",
      "reviewer_name": "Rahel",
      "comments": "Mein Freund un in hig und hat so Leute die gernervorragend und es gibt in der Strasse einen tollen alimentari und eine günstige weinerei. Das Bad ist sehr alt aber funktionstüchtig und der insgesamte Standard ist ok, ein wenig chaotisch aber dafür hat man das Gefühl man ist bei jemandem zuhause ! Jan ist ein aufgeschlossener lustiger Mann und auch um frische Handtücher und sonstiges bemüht! Wir danken.",
      "listing_id": 2016,
      "reviewer_id": 7178145,
      "date": "11-04-2016"
    },
    {
      "id": "60db6e747d0b4e43d6bd25a3",
      "reviewer_name": "Rahel",
      "comments": "Mein Freund und ich hatten gutefgeschlossener lustiger Mann und auch um frische Handtücher und sonstiges bemüht! Wir danken.",
      "listing_id": 2016,
      "reviewer_id": 7178145,
      "date": "11-04-2016"
    },
    {
      "id": "60db6e747d0b4e43d6bd25a3",
      "reviewer_name": "Rahel",
      "comments": "Mein Freund und ich hatte unfassbar ruhig und hat sogar ein gedämpftes Klavier für Leute die gerne spielen. Die Lage ist hervorragend und es gibt in der Strasse einen tollen alimentari und eine günstige weinerei. Das Bad ist sehr alt aber funktionstüchtig und der insgesamte Standard ist ok, ein wenig chaotisch aber dafür hat man das Gefühl man ist bei jemandem zuhause ! Jan ist ein aufgeschlossener lustiger Mann und auch um frische Handtücher und sonstiges bemüht! Wir danken.",
      "listing_id": 2016,
      "reviewer_id": 7178145,
      "date": "11-04-2016"
    },
    {
      "id": "60db6e747d0b4e43d6bd25a3",
      "reviewer_name": "Rahel",
      "comments": "Mein Freundruhig und hat sogar ein gedämpftes Klavier für Leute die gerne spielen. Die Lage ist hervorragend und es gibt in der Strasse einen tollen alimentari und eine günstige weinerei. Das Bad ist sehr alt aber funktionstüchtig und der insgesamte Standard ist ok, ein wenig chaotisch aber dafür hat man das Gefühl man ist bei jemandem zuhause ! Jan ist ein aufgeschlossener lustiger Mann und auch um frische Handtücher und sonstiges bemüht! Wir danken.",
      "listing_id": 2016,
      "reviewer_id": 7178145,
      "date": "11-04-2016"
    },
    {
      "id": "60db6e747d0b4e43d6bd25a3",
      "reviewer_name": "Rahel",
      "comments": "Mein Freundrst hervorragend und es gibt in der Strag und der inenig chaotisch aber dafür hat man das Gefühl man ist bei jemandem zuhause ! Jan ist ein aufgeschlossener lustiger Mann und auch um frische Handtücher und sonstiges bemüht! Wir danken.",
      "listing_id": 2016,
      "reviewer_id": 7178145,
      "date": "11-04-2016"
    },

]

  ngOnInit(): void {
    var a =fetch('http://3.19.213.254:8080/truecolours/listingId/7', {
      method: "GET",
      // Access-Control-Allow-Origin: *,
      mode: 'cors',
      credentials: 'include',
      headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
    console.log(a.toString);
  }
}
