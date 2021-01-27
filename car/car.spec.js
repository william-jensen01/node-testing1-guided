test('sanity', () => { // THE TEST

  // ASSERTIONS
  expect(3).toBe(3) // eslint-disable-line
  expect(3).not.toBe(4)
  expect(3).toBeGreaterThan(2)
})

it('is not the same toEqual and toBe', () => {
  let a = {}
  let b = {}
  let c = a

  expect(a).not.toBe(b)
  expect(a).toEqual(b)
  expect(a).toBe(c)
})
