const expect = require('expect');

const {isRealString} = require('./validator');

describe('isRealString function', () => {

  it('should reject non-string', () =>{
    var result = isRealString(12335);
    expect(result).toBe(false);
  });

  it('should reject blank spaces', () =>{
    var result = isRealString("    ");
    expect(result).toBe(false);
  });

  it('should should allow string with non-space characters', () =>{
    var result = isRealString("aValidString");
    expect(result).toBe(true);
  });
});
