export class Quote{
    constructor(text){
        this.text = text;
        this.quessed = [];
    }

    getContent(){
        let content = "";
        for(const char of this.text){
            if(char == " " || this.quessed.includes(char)){
                content += char;
            } else{
                content += "_";
            }
        }
        return content;
    }

    quess(letter){
        if(!this.text.includes(letter)){
            return false;
        } 
        this.quessed.push(letter);
        return true;
    }
}