import Team from '../team';

test('должен успешно добавлять уникального персонажа в команду', () => {
  const team = new Team();
  const character = { name: 'Лучник', type: 'Bowman' };

  team.add(character);

  expect(team.members.has(character)).toBe(true);
  expect(team.members.size).toBe(1);
});

test('должен выбрасывать ошибку при повторном добавлении того же персонажа', () => {
  const team = new Team();
  const character = { name: 'Маг', type: 'Magician' };

  team.add(character);

  expect(() => team.add(character)).toThrow('Данный персонаж уже есть в команде!');
});

test('должен добавлять несколько персонажей одновременно и игнорировать дубликаты без ошибок', () => {
  const team = new Team();
  const char1 = { name: 'Лучник', type: 'Bowman' };
  const char2 = { name: 'Маг', type: 'Magician' };

  team.addAll(char1, char2, char1);

  expect(team.members.size).toBe(2);
  expect(team.members.has(char1)).toBe(true);
  expect(team.members.has(char2)).toBe(true);
});

test('должен конвертировать Set с персонажами в обычный массив', () => {
  const team = new Team();
  const char1 = { name: 'Лучник', type: 'Bowman' };
  const char2 = { name: 'Маг', type: 'Magician' };

  team.addAll(char1, char2);
  const result = team.toArray();

  expect(Array.isArray(result)).toBe(true);
  expect(result).toEqual([char1, char2]);
});
