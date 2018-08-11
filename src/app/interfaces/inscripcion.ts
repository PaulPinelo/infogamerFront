export class  Inscripcion {
  _id: string;
  team: string;
  juego: string;
  arreglo: [InscripcionUser];
  estado: boolean;

  constructor(id: string, team: string, juego: string, arreglo: [InscripcionUser], estado: boolean) {
    this._id = id;
    this.team = team;
    this.juego = juego;
    this.arreglo = arreglo;
    this.estado = estado;
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
