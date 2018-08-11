import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Inscripcion} from '../interfaces/inscripcion';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class InscripcionService {
  // public urlAPI = 'http://backpiscis-backpiscsis.7e14.starter-us-west-2.openshiftapps.com/';
  public urlAPI = 'http://localhost:8080/';
  public Ruta = 'in';

  constructor(public _httpClient: HttpClient) {
  }

  obtenerLista() {
    return this._httpClient.get(this.urlAPI + this.Ruta, httpOptions);
  }

  guardarIns(newIns: Inscripcion) {
    return this._httpClient.post(this.urlAPI + this.Ruta, newIns, httpOptions);
  }

  obtenerbyjuego(juego: string) {
    return this._httpClient.get(this.urlAPI + this.Ruta + '/' + juego, httpOptions);
  }
}
