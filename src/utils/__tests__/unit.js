import * as unit from '../unit';

describe('src/utils/unit', () => {
  test('autoPx', () => {
    window.innerWidth = 360;
    expect(unit.autoPx(100)).toBe(100);

    window.innerWidth = 1440;
    expect(unit.autoPx(100)).toBe(100);
  });
});
