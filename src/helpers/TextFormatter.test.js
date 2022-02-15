import TextFormater from './TextFormatter';

test('remove dot and change to comma', () => {
    const text = new TextFormater('-200.00');
    expect(text.ChangeDotToComma()).toEqual('-200,00');
});