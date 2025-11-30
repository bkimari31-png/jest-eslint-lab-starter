const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('capitalizeWords', () => {
  test('capitalizes each word in a normal sentence', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
  });

  test('returns empty string if input is empty', () => {
    expect(capitalizeWords('')).toBe('');
  });

  test('handles single-word strings', () => {
    expect(capitalizeWords('javascript')).toBe('Javascript');
  });

  test('handles strings with special characters', () => {
    expect(capitalizeWords('hello-world')).toBe('Hello-World');
  });
});



describe('filterActiveUsers', () => {
  const users = [
    { name: 'Alice', isActive: true },
    { name: 'Bob', isActive: false },
    { name: 'Charlie', isActive: true },
  ];

  test('returns only active users', () => {
    expect(filterActiveUsers(users)).toEqual([
      { name: 'Alice', isActive: true },
      { name: 'Charlie', isActive: true },
    ]);
  });

  test('returns empty array if no users are active', () => {
    const inactiveUsers = [
      { name: 'Bob', isActive: false },
    ];
    expect(filterActiveUsers(inactiveUsers)).toEqual([]);
  });
});


describe('logAction', () => {
  test('logs action with username and timestamp', () => {
    const result = logAction('login', 'Alice');
    expect(result).toMatch(/User Alice performed login at \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/);
  });
});
