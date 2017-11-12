var expect = require('expect');

var {generateMessage} = require('./message');

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
