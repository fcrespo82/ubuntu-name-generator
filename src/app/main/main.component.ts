import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
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
  photographer
  pexelsClient = new pexels('563492ad6f91700001000001670c73a98d2e432f952c03b908fb6a49')

  constructor(private client: HttpClient, private activatedRoute: ActivatedRoute,
  private router: Router) {

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

      this.pexelsClient.search(this.animal, 1, 1).then(
        result => {
          if (result.error) {
            this.image = ''
            return
          }
          console.log(result)
          if (result.photos.length > 0) {
            this.image = result.photos[0].src.square
          } else {
            this.image = ''
          }
        }
      )
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

    this.router.navigate([this.adjective, this.animal, this.ubuntuVersion])

    // this.pexelsClient.search(this.animal, 1, 1).then(
    //   result => {
    //     if (result.error) {
    //       this.image = ''
    //       return
    //     }
    //     console.log(result)
    //     if (result.photos.length > 0) {
    //       this.image = result.photos[0].src.square
    //       this.photographer = result.photos[0].photographer
    //     } else {
    //       this.image = ''
    //     }
    //   }
    // )

  }

  pad2(number) {
    return (number < 10 ? '0' : '') + number
  }
}
