import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    expect(classNames('someClass', {}, ['class1', 'class2']))
      .toBe('someClass class1 class2');
  });

  test('with mods and additional class', () => {
    expect(classNames(
      'someClass',
      { active: true, focus: true, hover: false },
      ['class1', 'class2'],
    ))
      .toBe('someClass class1 class2 active focus');
  });
});
