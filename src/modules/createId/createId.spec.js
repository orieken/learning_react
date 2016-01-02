import expect from 'expect';
import createId from './createId';

describe('createId', () => {
  it('should convert description to unique id', () => {
    const actual = createId(123, 'this long name');
    const expected = '123-this-long';
    expect(actual).toEqual(expected);
  })
});