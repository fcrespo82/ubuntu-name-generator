import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as pexels from "pexels-api-wrapper";
import { actual_names, ubuntu_names } from "../names";

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styles: []
})
export class MainComponent implements OnInit {
  title = 'Ubuntu Name Generator';
  ubuntuName
  ubuntuVersion
  image
  adjective
  animal
  realNames = actual_names

  constructor(private client: HttpClient, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    console.log(this.activatedRoute)

    
    this.activatedRoute.params.subscribe(params => {

      if (!params.adjective) {
        this.generateName()
        return
      }
      this.adjective = params.adjective
      this.animal = params.animal
      
      this.ubuntuVersion = `${params.version}`

      this.ubuntuName = `${this.adjective} ${this.animal}`
      this.image = `https://loremflickr.com/320/240/${this.animal}&random=1`
    })
    
  }

  generateName() {
    let charCode = Math.round(Math.random() * 25)

    let alphabetLetter = 'abcdefghijklmnopqrstuvwxyz'[charCode]

    let chosenLetter = ubuntu_names[alphabetLetter]

    let adjectives = chosenLetter.adjectives
    let animals = chosenLetter.animals
    let initial_year = chosenLetter.version.initial_year
    let month = chosenLetter.version.month
    let random_year = initial_year * (Math.round(Math.random() * 1) + 1)

    let chosenAdjectiveIndex = Math.round(Math.random() * (adjectives.length - 1))
    let chosenAnimalIndex = Math.round(Math.random() * (animals.length - 1))

    this.adjective = adjectives[chosenAdjectiveIndex]
    this.animal = animals[chosenAnimalIndex]
    this.ubuntuVersion = `${random_year}.${this.pad2(month)}`
    this.ubuntuName = `${this.adjective} ${this.animal}`

    this.image = `https://loremflickr.com/320/240/${this.animal}&random=1`

    // let pexelsClient = new pexels('API')

    // pexelsClient.search(this.animal, 1, 1).then(
    //   result => {
    //     if (result.error) return
    //     console.log(result)
    //     result.photos[0].url
    //   }
    // )

  }

  pad2(number) {
    return (number < 10 ? '0' : '') + number
  }
}
