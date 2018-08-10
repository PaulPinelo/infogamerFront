export class  Inscripcion {
  team: string;
  juego: string;
  arreglo: [InscripcionUser];

  constructor(team: string, juego: string, arreglo: [InscripcionUser]) {
    this.team = team;
    this.juego = juego;
    this.arreglo = arreglo;
  }
}

export class InscripcionUser {
  cod: string;
  nam: string;
  nick: string;
  ep: string;

  constructor(cod: string, nam: string, nick: string, ep: string) {
    this.cod = cod;
    this.nam = nam;
    this.nick = nick;
    this.ep = ep;
  }
}
