import { Yonoma } from '../src/index';

global.fetch = jest.fn();

describe('Yonoma class', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('should throw an error if no API key is provided', () => {
    expect(() => new Yonoma('')).toThrow('API key is missing. Please pass it to the constructor - new Yonoma("YOUR_API_KEY")');
  });
});
