import {Component, OnInit} from '@angular/core';
import {InscripcionService} from './services/inscripcion.service';
import {Inscripcion, InscripcionUser} from './interfaces/inscripcion';

declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inscripcion: Inscripcion = {
    _id: '',
    team: '',
    juego: '',
    arreglo: [
      {cod: '', nam: '', nick: '', ep: ''},
      {cod: '', nam: '', nick: '', ep: ''},
      {cod: '', nam: '', nick: '', ep: ''},
      {cod: '', nam: '', nick: '', ep: ''},
      {cod: '', nam: '', nick: '', ep: ''}
    ],
    estado: false
  };
  items: any = [];
  items2: any = [];
  juegos = ['Dota2', 'Fornite', 'Counter Strike', 'StarCraft', 'Pes2018'];
  juegosTamano = [5, 2, 5, 1, 1];

  EscuelasProfesionales = [
    {EP: 'Arquitectura'}, {EP: 'Ing. Eléctrica'},
    {EP: 'Ing. Geológica'}, {EP: 'Ing. Metalúrgica'},
    {EP: 'Ing. Minas'}, {EP: 'Ing. Mecánica'},
    {EP: 'Ing. Química'}, {EP: 'Ing. Civil'},
    {EP: 'Química'}, {EP: 'Física'}, {EP: 'Matemática'},
    {EP: 'Ing. Informática y de Sistemas'},
    {EP: 'Ing. Electrónica'}, {EP: 'Ing. Petroquimica'},
    {EP: 'Agronomía'}, {EP: 'Biología'},
    {EP: 'Enfermería'}, {EP: 'Farmacia y Bioquímica'},
    {EP: 'Medicina Humana'}, {EP: 'Odontología'},
    {EP: 'Zootecnia'}, {EP: 'Ciencias Administrativas'},
    {EP: 'Contabilidad'}, {EP: 'Economía'},
    {EP: 'Turismo'}, {EP: 'Antropología'},
    {EP: 'Arqueología'}, {EP: 'Derecho'},
    {EP: 'Historia'}, {EP: 'Ciencias de la Comunicación'},
    {EP: 'Educación'}
  ];
  private imagenes = {
    card1: require('../assets/img/portada.jpg'),
    card2: require('../assets/img/Captura.png'),
    foto1: require('../assets/img/counter.png'),
    foto2: require('../assets/img/counter.png'),
    foto3: require('../assets/img/counter.png'),
    foto4: require('../assets/img/counter.png'),
    foto5: require('../assets/img/counter.png'),
    foto6: require('../assets/img/counter.png'),
    foto7: require('../assets/img/counter.png'),
    foto8: require('../assets/img/counter.png'),
    foto9: require('../assets/img/counter.png'),
  };
  private header = {
    titulo: 'INFOGAMER',
    menu1: 'INFORMACION',
    menu2: 'PRE-INSCRIPCION',
    menu3: 'EQUIPOS',
    btnInscripcion: 'PRE-INSCRIPCIONES',
  };
  private carrusel = {
    titulo1: 'INFOGAMER',
    descripcion1: 'Ser gamer tambien es un talento ',
  };
  private inicio = {
    cardTitle1: 'Infogamer',
    descripcion1: 'Bases de la Competencia',
  };
  private areaInscripcion = {
    titulo: 'Inscribete a la competencia',
    descripcion: 'Si tienes talento ven y inscribete , y participa en esta emocionante competencia',
    BOTON: 'Pre-Inscribirse',
  };
  private fotos = {
    titulo: 'EQUIPOS',
    t1: 'foto1',
    t2: 'foto2',
    t3: 'foto3',
    t4: 'foto4',
    t5: 'foto5',
    t6: 'foto6',
    t7: 'foto7',
    t8: 'foto8',
    t9: 'foto9',
    d1: 'descripcion1',
    d2: 'descripcion2',
    d3: 'descripcion3',
    d4: 'descripcion4',
    d5: 'descripcion5',
    d6: 'descripcion6',
    d7: 'descripcion7',
    d8: 'descripcion8',
    d9: 'descripcion9',
  };
  private footer = {
    empresa: 'Infogamer',
    derechos: 'Todos los Derechos Reservados',
    graciasA: 'Organizado por ',
    by: 'Actividades INFO',
  };

  public indice = 0;

  cambiar1(newelemet: number) {
    console.log(newelemet);
    this.inscripcion.arreglo.splice(0, this.inscripcion.arreglo.length);
    for (let i = 0; i < this.juegosTamano[newelemet]; i++) {
      this.inscripcion.arreglo.push(new InscripcionUser('', '', '', ''));
    }
    this.indice = newelemet;
    // console.log(this.inscripcion);
  }

  mensaje() {
    alert('Se ha inscrito con exito.');
  }

  ngOnInit(): void {
    // this.MostrarTabla();
  }

  constructor(private _inscripcionService: InscripcionService) {
  }

  public guardarInscripcion() {
    console.log(this.inscripcion);
    this._inscripcionService.guardarIns(this.inscripcion)
      .subscribe({
        next: (data) => {
          console.log('Datos Enviados:', data);
        },
        error: (err) => {
          console.error('Error!:', err);
        },
        complete: () => {
          console.log('Guardar Datos OK.');
        }
      });
  }

  public byjuego(newelemet: number) {
    this._inscripcionService.obtenerbyjuego(this.juegos[newelemet])
      .subscribe({
        next: (data) => {
          console.log(data);
          this.items2 = data;
        },
        error: (err) => {
          console.error('Error!:', err);
        },
        complete: () => {
          console.log('Obtener Juego Datos OK.');
        }
      });
  }

  public updateState(newelemet: number, estado) {
    alert('Estas seguro de cambiar el estado?');
    console.log(newelemet);
    console.log(this.items2);
    this._inscripcionService.upstate(this.items2[newelemet]._id, estado)
      .subscribe({
        next: (data) => {
          //    this.items2 = data;
        },
        error: (err) => {
          console.error('Error!:', err);
        },
        complete: () => {
          console.log('Obtener Juego Datos OK.');
        }
      });
  }
}
