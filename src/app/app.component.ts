import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as GoogleImages from 'google-images';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styles: []
})
export class AppComponent {
    title = 'Ubuntu Name Generator';
    ubuntuName = ''
    data = {}
    image = ''
    animal = ''

    constructor(private client: HttpClient) {
        this.client.get('/assets/data.json').subscribe(
            data => {
                this.data = data
                this.generate()
            }
        )
    }

    generate() {
        this.image = ''

        let charCode = Math.round(Math.random() * 25)

        let alphabetLetter = 'abcdefghijklmnopqrstuvwxyz'[charCode]

        let adjectives = this.data[alphabetLetter]['adjectives']
        let animals = this.data[alphabetLetter]['animals']

        let choiceAdjective = Math.round(Math.random() * (adjectives.length - 1))
        let choiceAnimal = Math.round(Math.random() * (animals.length - 1))

        this.animal = animals[choiceAnimal]
        this.ubuntuName = `${adjectives[choiceAdjective]} ${this.animal}`

        this.image = `https://loremflickr.com/320/240/${this.animal}&random=1`

        // let url = `https://pixabay.com/api/?key=9038555-e4f7a4ae106e1085d2349489c&q=${this.animal}&image_type=photo&per_page=3`
        // this.client.get(url).subscribe(response => {
        //     console.log(response)
        //     this.image = response['hits'][0]['previewURL']
        // })
    }
}