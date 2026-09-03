import TennisGame from '../src/TennisGame';

test('el marcador inicial es Love-Love', () => {
  const game = new TennisGame('Player1', 'Player2');
  expect(game.score()).toBe('Love-Love');
});
test('jugador 1 anota un punto: 15-Love', () => {
  const game = new TennisGame('Player1', 'Player2');
  game.wonPoint('Player1');
  expect(game.score()).toBe('15-Love');
});
test ('ambos jugadores anotan un punto: 15:15' , () => {
  const game = new TennisGame('Player1', 'Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  expect(game.score()).toBe('15-15');
});
test('jugador 1 anota dos puntos y jugador 2 uno: 30-15' , () => {
  const game = new TennisGame('Player1', 'Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  expect(game.score()).toBe('30-15');
});
test('ambos jugadores anotan dos puntos: 30-30', () => {
  const game = new TennisGame('Player1', 'Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  expect(game.score()).toBe('30-30');
});
test('jugador 1 anota tres puntos y jugador 2 dos: 40-30' , () => {
  const game = new TennisGame('Player1', 'Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  expect(game.score()).toBe('40-30');
});