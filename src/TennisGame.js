class TennisGame {
  constructor(player1Name, player2Name) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.p1Points = 0;
    this.p2Points = 0;
  }

  wonPoint(playerName) {
    if (playerName === this.player1Name) {
      this.p1Points++;
    } else {
      this.p2Points++;
    }
  }

  scoreName(points) {
    const names = ['Love', '15', '30', '40'];
    return names[points];
  }

  score() {
    const diferencia = this.p1Points - this.p2Points;
    if (this.p1Points >= 4 || this.p2Points >= 4){
      if (diferencia >= 2) {
        return `Game for ${this.player1Name}`;
      }
      if (diferencia <= -2) {
        return `Game for ${this.player2Name}`;
      }
      if (diferencia === 1){
        return `Advantage ${this.player1Name}`;
      }
      if (diferencia === -1){
        return `Advantage ${this.player2Name}`;
      }
    }
    if (this.p1Points === this.p2Points && this.p1Points >= 3) {
    return 'Deuce';
    }

    return `${this.scoreName(this.p1Points)}-${this.scoreName(this.p2Points)}`;
  }
}

export default TennisGame;