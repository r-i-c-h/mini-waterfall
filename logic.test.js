// .toBe uses Object.is to test exact equality. For values use .toEqual instead:
// .not - modifier not.toBe(null)
const {foo} = require ('./logic');

// const expected = ['Alice', 'Bob'];
//   it('is true even with rec'd arr contains additional elements', () => {
//     expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
//   });
//   it('does not match if received does not contain expected elements', () => {
//     expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
//   });

describe( 'Getting Wall Values', () => {
  test('returns a value', () => {
    const arr = [];
    expect(foo(arr)).not.toBeUndefined() );
  }

  test('returns a value', () => {
    const miniArr = [2,0,1];
    expect(foo(miniArr)).to)
  }

test('returns a value', () => {
  const miniArr = [1,0,1];
  expect(foo(miniArr))..toBe(undefined);
}
});

// TWO HIGHEST COULD BE RIGHT NEXT TO EACH OTHER!
// THERE COULD BE A /\ SHAPE

