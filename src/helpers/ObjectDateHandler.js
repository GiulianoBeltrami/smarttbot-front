import moment from 'moment';

class ObjectDateHandler {
    constructor(datesList, dateToFind){
        this.datesList = datesList;
        this.dateToFind = dateToFind;
    }

    findDate(){
        const filteredDate = this.datesList.filter((element) => moment(this.dateToFind).isSame(element.date,'day'));
        return filteredDate;
    }
}

export default ObjectDateHandler;