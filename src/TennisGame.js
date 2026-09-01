class TennisGame {
  constructor(player1Name, player2Name) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.p1Points = 0;
    this.p2Points = 0;
  }

  score() {
    return 'Love-Love';
  }
}

module.exports = TennisGame;