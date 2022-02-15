class TextFormater {
    constructor(text) {
        this.text = text;
    }

    ChangeDotToComma = () => {
        if(this.text){
            this.text = this.text.replace('.',',');
            return this.text;
        }
    }
}

export default TextFormater;