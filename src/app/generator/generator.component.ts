import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import * as pexels from "pexels-api-wrapper";
import { actual_names, ubuntu_names } from "../names";

@Component({
  selector: 'generator',
  templateUrl: 'generator.component.html',
  styles: []
})
export class GeneratorComponent implements OnInit {
  ubuntuName
  ubuntuVersion
  image
  adjective
  animal
  realNames = actual_names
  photographer
  link
  pexelsClient = new pexels('563492ad6f91700001000001670c73a98d2e432f952c03b908fb6a49')

  constructor(private client: HttpClient, private activatedRoute: ActivatedRoute,
  private router: Router) {

  }

  ngOnInit() {
    this.image = 'http://via.placeholder.com/277?text=Loading...'
    this.link = this.router.url
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
            this.image = 'http://via.placeholder.com/277?text=NO+IMAGE'
            return
          }
          if (result.photos.length > 0) {
            this.image = result.photos[0].src.square
          } else {
            this.image = 'http://via.placeholder.com/277?text=NO+IMAGE'
          }
        }
      )
    })

  }

  generateName() {
    this.image = 'http://via.placeholder.com/277?text=Loading...'

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

    this.router.navigate(['/generator',this.adjective, this.animal, this.ubuntuVersion])
  }

  pad2(number) {
    return (number < 10 ? '0' : '') + number
  }
}
