class TextFormater {
    constructor(text) {
        this.text = `${text}`;
    }

    ChangeDotToComma = () => {
        if(this.text.includes('.')){
            this.text = this.text.replace('.',',');
            return this.text;
        }
        else{
            return this.text;
        }
    }
}

export default TextFormater;