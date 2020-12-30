import { Container } from '../src';

describe('di', () => {
  it('works', () => {
    const fsDi = new Container({
      readFile: () => 'test',
    });

    const mathDi = new Container({
      random: () => 5,
    });

    const di = new Container({
      fs: fsDi,
      math: mathDi,
    });

    fsDi.get('readFile');

    const fs = di.get('fs');

    expect(fs.get('readFile')()).toBe('test');
    expect(di.get('math').get('random')()).toBe(5);
  });

  it('rebing', () => {
    const di = new Container({
      number: 5 as number,
      string: 'hello world' as string,
    });

    expect(di.get('number')).toBe(5);
    expect(di.get('string')).toBe('hello world');

    di.rebind('number', 10);

    expect(di.get('number')).toBe(10);
    expect(di.get('string')).toBe('hello world');

    di.rebind('string', 'hello');

    expect(di.get('number')).toBe(10);
    expect(di.get('string')).toBe('hello');
  });
});
