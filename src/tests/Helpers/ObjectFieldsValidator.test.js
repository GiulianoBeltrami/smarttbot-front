import ObjectFieldsValidator from '../../helpers/ObjectFieldsValidator';

const validData = {
    created_at: "2020-07-27 00:10:27",
    daily_balance: 4.45,
    id: 1648753,
    initial_capital: 67692.5,
    last_paper: {
        created_at: "2020-08-28 13:40:52",
        id: 113001,
        paper: "WINBG20",
        paper_value: 84208.15,
        position: 17,
        profit: 5.75,
        robot_id: 1648753,
        type: 1,
    },
    mode: 0,
    movimentations: [],
    number_trades: 506,
    running: 0,
    simulation: 1,
    stock_codes: "RAIL3",
    strategy: "Hórus",
    title: "Eu Metus LLC",
    type: "Normal",
    updated_at: "2020-08-04 18:04:51",
}


const invalidData = {
    created_at: "2020-07-27 00:10:27",
    daily_balance: 4.45,
    id: 1648753,
    initial_capital: 67692.5,
    last_paper: {
        created_at: "2020-08-28 13:40:52",
        id: 113001,
        paper: "WINBG20",
        paper_value: 84208.15,
        position: "" ,
        profit: 5.75,
        robot_id: 1648753,
        type: 1,
    },
    mode: 0,
    movimentations: [],
    number_trades: 506,
    running: 0,
    simulation: 1,
    stock_codes: "RAIL3",
    strategy: "Hórus",
    title: "Eu Metus LLC",
    type: "Normal",
    updated_at: "2020-08-04 18:04:51",
}

test('check if object has correct values', () => {
    const parameter = new ObjectFieldsValidator(validData);
    expect(parameter.isValid()).toBeTruthy();
});

test('check if object has incorrect values', () => {
    const parameter = new ObjectFieldsValidator(invalidData);
    expect(parameter.isValid()).toBeFalsy();
});
