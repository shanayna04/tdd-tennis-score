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
test('ambos jugadores llegan a 40: Deuce' , () => {
  const game = new TennisGame('Player1', 'Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  expect(game.score()).toBe('Deuce');
});
test('jugador 1 anota en deuce: Advantage Player1', () => {
  const game = new TennisGame('Player1', 'Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  expect(game.score()).toBe('Advantage Player1');
});
test('jugador 2 anota en deuce: Advantage Player2' , () => {
  const game = new TennisGame('Player1', 'Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player2');
  expect(game.score()).toBe('Advantage Player2');
});
test('jugador 1 gana con ventaja: Game for Player1' , () => {
  const game = new TennisGame('Player1', 'Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player1');
  expect(game.score()).toBe('Game for Player1');
});
test('jugador 2 gana con ventaja: Game for Player2' , () => {
  const game = new TennisGame('Player1', 'Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player2');
  game.wonPoint('Player2');
  expect(game.score()).toBe('Game for Player2');
});
test('jugador 2 empata tras ventaja de jugador 1: vuelve a deuce' , () => {
  const game = new TennisGame('Player1', 'Player2')
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  game.wonPoint('Player1');
  game.wonPoint('Player2');
  expect(game.score()).toBe('Deuce');
});