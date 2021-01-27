const Car = require('./car')

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
describe('Car class', () => {
  let prius
  beforeEach(() => {
    prius = new Car('toyota', 'prius')
  })
  it('exists', () => {
    expect(Car).toBeDefined()
  })
  it('creates instances of cars', () => {
    expect(prius).toBeInstanceOf(Car)
  })
  it('cars have a "make" prop', () => {
    expect(prius).toHaveProperty('make', 'toyota')
    expect(prius.make).toBe('toyota')
    expect(prius).toEqual({ make: 'toyota' })
  })
  it('cars have a "model" prop', () => {
    expect(prius).toHaveProperty('model', 'toyota')
  })
})
