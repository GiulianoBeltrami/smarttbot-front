import ObjectDateHandler from '../../helpers/ObjectDateHandler';
import moment from 'moment';

const testData = {
    data: [{
        created_at: "2020-07-27 00:10:27",
        daily_balance: 4.45,
        id: 1648753,
        initial_capital: 67692.5,
        last_paper: {
            "robot_id": 1648757,
            "paper": "BOVA11",
            "position": 77,
            "type": 0,
            "paper_value": 72048.95,
            "profit": 74.81,
            "created_at": "2020-08-06 10:48:13",
            "id": 125001
        },
        mode: 0,
        movimentations: [
            {
                "date": "2022-02-16 05:21:11",
                "value": 162
            },
            {
                "date": new Date(),
                "value": 162
            },
        ],
        number_trades: 506,
        running: 0,
        simulation: 1,
        stock_codes: "RAIL3",
        strategy: "Hórus",
        title: "Eu Metus LLC",
        type: "Normal",
        updated_at: "2020-08-04 18:04:51"
    }]
}

const testData2 = {
    data: [{
        created_at: "2020-07-27 00:10:27",
        daily_balance: 4.45,
        id: 1648753,
        initial_capital: 67692.5,
        last_paper: {
            "robot_id": 1648757,
            "paper": "BOVA11",
            "position": 77,
            "type": 0,
            "paper_value": 72048.95,
            "profit": 74.81,
            "created_at": "2020-08-06 10:48:13",
            "id": 125001
        },
        mode: 0,
        movimentations: [
            {
                "date": "2022-02-16 05:21:11",
                "value": 162
            },
            {
                "date": "2022-02-16 05:21:11",
                "value": 162
            },
        ],
        number_trades: 506,
        running: 0,
        simulation: 1,
        stock_codes: "RAIL3",
        strategy: "Hórus",
        title: "Eu Metus LLC",
        type: "Normal",
        updated_at: "2020-08-04 18:04:51"
    }]
}

test('compare today date with object correctly', () => {
    
    const today = moment();
    const date = new ObjectDateHandler(testData.data[0].movimentations,today);
    const todayOnList = date.findDate();

    expect(todayOnList).not.toStrictEqual([]);
});

test('compare today date with date wrong', () => {
    
    const today = moment();
    const date = new ObjectDateHandler(testData2.data[0].movimentations,today);
    const todayOnList = date.findDate();

    expect(todayOnList).toStrictEqual([]);
});