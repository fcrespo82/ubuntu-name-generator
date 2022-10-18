import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ubuntu_names} from "../names";
import {UbuntuReleaseNamesService} from '../ubuntu-release-names.service';

@Component({
  selector: 'generator',
  templateUrl: 'generator.component.html',
  styles: [],
})
export class GeneratorComponent implements OnInit {
  ubuntuName
  ubuntuVersion
  image
  adjective
  animal
  realNames
  photographer
  link
  constructor(private client: HttpClient, private activatedRoute: ActivatedRoute,
    private router: Router, private realUbuntuNames: UbuntuReleaseNamesService) {
    this.realUbuntuNames.getNamesCVS().subscribe(realNames => {
      this.realNames = realNames
    })
  }

  ngOnInit() {
    this.image = 'https://via.placeholder.com/1000?text=Loading...'
    this.link = this.router.url
    this.activatedRoute.params.subscribe(params => {
      if (!params.adjective && params.realVersion == undefined) {
        this.generateName()
        return
      }

      if (params.realVersion) {
        this.realUbuntuNames.getNamesCVS().subscribe(realNames => {
          this.realNames = realNames;
          let real = this.realNames.filter(item => item.version === params.realVersion);
          this.adjective = real[0].adjective
          this.animal = real[0].animal
          this.ubuntuVersion = `${real[0].version}`
          this.ubuntuName = `${real[0].adjective} ${real[0].animal}`

          let googleUrl = `https://content.googleapis.com/customsearch/v1?q=Ubuntu%20Wallpaper$20${this.ubuntuName}&searchType=image&imgSize=large&num=1&cx=000894297801806964922%3Ax3hdmbt024e&key=AIzaSyC9hDu5kAJJfR8D1JkYafbh6nM8X5NwyGI`
          this.client.get(googleUrl).toPromise().then((result: any) => {
            this.image = result.items[0].link
          }).catch(err => {
            if (err.status === 429) {
              this.image = 'https://via.placeholder.com/1000?text=QUOTA+EXCEEDED'
            }
            else {
              this.image = 'https://via.placeholder.com/1000?text=NO+IMAGE'
            }
          })
        })

      }
      else {
        this.adjective = params.adjective
        this.animal = params.animal
        this.ubuntuVersion = `${params.version}`
        this.ubuntuName = `${this.adjective} ${this.animal}`
        this.image = 'https://via.placeholder.com/1000?text=Loading...'

        let googleUrl = `https://content.googleapis.com/customsearch/v1?q=${this.animal}%20animal&searchType=image&imgSize=large&num=1&cx=000894297801806964922%3Ax3hdmbt024e&key=AIzaSyC9hDu5kAJJfR8D1JkYafbh6nM8X5NwyGI`
        this.client.get(googleUrl).toPromise().then((result: any) => {
          this.image = result.items[0].link
        }).catch(err => {
          if (err.status === 429) {
            this.image = 'https://via.placeholder.com/1000?text=QUOTA+EXCEEDED'
          }
          else {
            this.image = 'https://via.placeholder.com/1000?text=NO+IMAGE'
          }
        })
      }
    })
  }

  generateName() {
    this.image = 'https://via.placeholder.com/1000?text=Loading...'

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

    this.router.navigate(['/generator', this.adjective, this.animal, this.ubuntuVersion])
  }

  pad2(number) {
    return (number < 10 ? '0' : '') + number
  }
}
