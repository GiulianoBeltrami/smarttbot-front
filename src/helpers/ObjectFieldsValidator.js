class ObjectFieldsValidator {
    constructor(objectToValidate) {
        this.object = objectToValidate;
    }

    isValid() {
        if(this.#isLastPaperValid()){
            return (this.#isPositionValid() && this.#isPaperValid() && this.#isPaperValueValid() && this.#isProfitValid());
        }
        return false;
    }

    #isLastPaperValid() {
        if (this.object.last_paper !== undefined && this.object.last_paper !== "") {
            return true;
        }
        return false;
    }

    #isPositionValid() {
        if (this.object.last_paper.position !== undefined && this.object.last_paper.position !== ""){
            return true;
        }
        return false;
    }

    #isPaperValid() {
        if (this.object.last_paper.paper !== undefined && this.object.last_paper.paper !== ""){
            return true;
        }
        return false;
    }

    #isPaperValueValid() {
        if (this.object.last_paper.paper_value !== undefined && this.object.last_paper.paper_value !== ""){
            return true;
        }
        return false;
    }

    #isProfitValid() {
        if (this.object.last_paper.profit !== undefined && this.object.last_paper.profit !== ""){
            return true;
        }
        return false;
    }

}

export default ObjectFieldsValidator;