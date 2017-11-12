var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

//for asynchronous functions there's no need to provide done()
describe ('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Karim';
    var text = 'This is a test message';
    var message = generateMessage(from, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Karim';
    var lat = 1;
    var lng = 1;
    var locationMessage = generateLocationMessage(from, lat, lng);

    expect(locationMessage.from).toBe(from);
    expect(locationMessage.url).toBe(`https://www.google.com/maps?q=${lat},${lng}`);
    expect(typeof locationMessage.createdAt).toBe('number');
  });
});
