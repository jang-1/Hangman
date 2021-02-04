import {Quote} from './Quote.js';

class Game {

    currentStep = 0;
    lastStep = 7;

    quotes = [
    {
        text: 'pan tadeusz',
        category: "Utwor literacki",

    },
    {
        text: 'janko muzykant',
        category: "Utwor literacki",

    },
    {
        text: 'akademia pana kleksa',
        category: "Film",

    },
    {
        text: 'ogniem i mieczem',
        category: "Film",

    }

    ];

    constructor({lettersWrapper, categoryWrapper, wordWrapper, outputWrapper}){
        this.lettersWrapper = lettersWrapper;
        this.categoryWrapper = categoryWrapper;
        this.wordWrapper = wordWrapper;
        this.outputWrapper = outputWrapper;

        const {text, category} = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        this.categoryWrapper.innerHTML = category;
        this.quote = new Quote(text);
    }

    guess(letter, event){
        event.target.disabled = true;
        if(this.quote.quess(letter)){
            this.drawQuote();
        }else {
            this.currentStep++;
            document.getElementsByClassName("step")[this.currentStep].style.opacity = 1;
            if(this.currentStep == this.lastStep){
                this.losing();
            }

        }
        
    }

    drawLetters(){
        for(let i = 0; i < 26; i++){
            const label = (i+10).toString(36);
            const button = document.createElement("button");
            button.innerHTML = label;
            button.addEventListener('click', (event) => this.guess(label,event));
            this.lettersWrapper.appendChild(button);
        }
    }

    drawQuote(){
        const content = this.quote.getContent();
        this.wordWrapper.innerHTML = content;
        if(!content.includes("_") ){
            this.winning();
        }
    }

    winning(){
        this.wordWrapper.innerHTML = "Gratulacje! Wygrywasz! Koniec gry!";
        this.lettersWrapper.innerHTML = "";
    }

    losing(){
        this.wordWrapper.innerHTML = "Niestety przegrywasz! Koniec gry!";
        this.lettersWrapper.innerHTML = "";
    }

    start() {
        document.getElementsByClassName("step")[this.currentStep].style.opacity = 1;
        this.drawLetters();
        this.drawQuote();
    }
}

const game = new Game({
    lettersWrapper: document.getElementById("letters"),
    categoryWrapper: document.getElementById("category"),
    wordWrapper: document.getElementById("word"),
    outputWrapper: document.getElementById("output")
});
game.start();

