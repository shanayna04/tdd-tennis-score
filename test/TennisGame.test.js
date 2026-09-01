const TennisGame = require('../src/TennisGame');

test('el marcador inicial es Love-Love', () => {
  const game = new TennisGame('Player1', 'Player2');
  expect(game.score()).toBe('Love-Love');
});
