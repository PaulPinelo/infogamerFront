import {Component, OnInit} from '@angular/core';
import {InscripcionService} from './services/inscripcion.service';
import {Inscripcion} from './interfaces/inscripcion';
import {Alert} from 'selenium-webdriver';

declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inscripcion: Inscripcion = {
    nombre: '',
    fecha: '',
    categoria: '',
    prueba: '',
    longitud: ''
  };
  items: any = [];
  // categoria = [
  //   {value: 'preminima', viewValue: 'Preminima'},
  //   {value: 'minima', viewValue: 'Minima'},
  //   {value: 'infantil A1', viewValue: 'Infantil A1'},
  //   {value: 'infantil A2', viewValue: 'Infantil A2'},
  //   {value: 'infantil B1', viewValue: 'Infantil B1'},
  //   {value: 'infantil B2', viewValue: 'Infantil B2'},
  //   {value: 'juvenil A', viewValue: 'Juvenil A'},
  //   {value: 'juvenil B', viewValue: 'Juvenil B'},
  //   {value: 'mayores', viewValue: 'Mayores'},
  // ];
  // modo = [
  //   {value: 'libre', viewValue: 'Libre'},
  //   {value: 'espalda', viewValue: 'Espalda'},
  //   {value: 'pecho', viewValue: 'Pecho'},
  //   {value: 'mariposa', viewValue: 'Mariposa'},
  //   {value: 'combinado', viewValue: 'Combinado'},
  // ];
  // longitud = [
  //   {value: 50, viewValue: '50m'},
  //   {value: 100, viewValue: '100m'},
  //   {value: 200, viewValue: '200m'},
  //   {value: 400, viewValue: '400m'},
  // ];

  arreglo = [
    {
      name: 'preminima',
      prubas: [
        {
          nombre: 'libre',
          longitudes: [50]
        },
        {
          nombre: 'pecho',
          longitudes: [50]
        },
        {
          nombre: 'espalda',
          longitudes: [50]
        }
      ]
    },
    {
      name: 'minima',
      prubas: [
        {
          nombre: 'libre',
          longitudes: [50]
        },
        {
          nombre: 'pecho',
          longitudes: [50]
        },
        {
          nombre: 'mariposa',
          longitudes: [50]
        },
        {
          nombre: 'espalda',
          longitudes: [50]
        }
      ]
    },
    {
      name: 'infantila1',
      prubas: [
        {
          nombre: 'libre',
          longitudes: [50, 100]
        },
        {
          nombre: 'pecho',
          longitudes: [50]
        },
        {
          nombre: 'mariposa',
          longitudes: [50]
        },
        {
          nombre: 'espalda',
          longitudes: [50]
        }
      ]
    },
    {
      name: 'infantila2',
      prubas: [
        {
          nombre: 'libre',
          longitudes: [50, 100]
        },
        {
          nombre: 'pecho',
          longitudes: [50]
        },
        {
          nombre: 'mariposa',
          longitudes: [50]
        },
        {
          nombre: 'espalda',
          longitudes: [50]
        }
      ]
    },
    {
      name: 'infantilb1',
      prubas: [
        {
          nombre: 'libre',
          longitudes: [50, 100]
        },
        {
          nombre: 'pecho',
          longitudes: [50]
        },
        {
          nombre: 'mariposa',
          longitudes: [50]
        },
        {
          nombre: 'espalda',
          longitudes: [50]
        },
        {
          nombre: 'combinado',
          longitudes: [200]
        }
      ]
    },
    {
      name: 'infantilb2',
      prubas: [
        {
          nombre: 'libre',
          longitudes: [50, 100]
        },
        {
          nombre: 'pecho',
          longitudes: [50]
        },
        {
          nombre: 'mariposa',
          longitudes: [50]
        },
        {
          nombre: 'espalda',
          longitudes: [50]
        },
        {
          nombre: 'combinado',
          longitudes: [200]
        }
      ]
    },
    {
      name: 'juvenila',
      prubas: [
        {
          nombre: 'libre',
          longitudes: [50, 100, 400]
        },
        {
          nombre: 'pecho',
          longitudes: [50]
        },
        {
          nombre: 'mariposa',
          longitudes: [50]
        },
        {
          nombre: 'espalda',
          longitudes: [50]
        },
        {
          nombre: 'combinado',
          longitudes: [200]
        }
      ]
    },
    {
      name: 'juvenilb',
      prubas: [
        {
          nombre: 'libre',
          longitudes: [50, 100, 400]
        },
        {
          nombre: 'pecho',
          longitudes: [100]
        },
        {
          nombre: 'mariposa',
          longitudes: [100]
        },
        {
          nombre: 'espalda',
          longitudes: [100]
        },
        {
          nombre: 'combinado',
          longitudes: [200]
        }
      ]
    },
    {
      name: 'mayores',
      prubas: [
        {
          nombre: 'libre',
          longitudes: [50, 100]
        },
        {
          nombre: 'pecho',
          longitudes: [100]
        },
        {
          nombre: 'mariposa',
          longitudes: [100]
        },
        {
          nombre: 'espalda',
          longitudes: [100]
        },
        {
          nombre: 'combinado',
          longitudes: [200]
        }
      ]
    }
  ];
  private imagenes = {
    card1: require('../assets/img/Salto del angel-San jeronimo 1977.jpg'),
    card2: require('../assets/img/torre h- san jeronimo 1977.jpg'),
    foto1: require('../assets/img/fotos/1.jpg'),
    foto2: require('../assets/img/fotos/2.jpg'),
    foto3: require('../assets/img/fotos/3.jpg'),
    foto4: require('../assets/img/fotos/4.jpg'),
    foto5: require('../assets/img/fotos/5.jpg'),
    foto6: require('../assets/img/fotos/6.jpg'),
    foto7: require('../assets/img/fotos/7.jpg'),
    foto8: require('../assets/img/fotos/8.jpg'),
    foto9: require('../assets/img/fotos/9.jpg'),
  };
  private header = {
    titulo: 'PISCIS',
    menu1: 'HISTORIA',
    menu2: 'INFORMACION',
    menu3: 'FOTOS',
    btnInscripcion: 'INSCRIPCIONES',
  };
  private carrusel = {
    titulo1: 'TITULO DE LA IMAGEN1',
    descripcion1: 'Descripcion de la imagen 1',
  };
  private inicio = {
    cardTitle1: 'Salto del angel.',
    descripcion1: 'Integrantes del club de natación Piscis\n' +
    'De derecha a izquierda\n' +
    'Waldo Ibarra Zambrano\n' +
    'Juan Portilla Ladrón de Guevara\n' +
    'Luis Olivera Layseca\n',
    cardTitle2: 'Torre H – Club piscis.',
    descripcion2: 'En sentido horario, empezando por abajo:\n' +
    '-\tRafael Barra\n' +
    '-\tJuan Portilla\n' +
    '-\tMarco Candia\n' +
    '-\tWaldo Ibarra\n' +
    '-\tLuis Olivera\n' +
    '-\tEdy Barra\n',
  };
  private areaInscripcion = {
    titulo: 'Inscribete a la competencia',
    descripcion: 'Si tienes talento para la natacion ven y inscribete , y participa en esta emocionante competencia',
    BOTON: 'Inscribirse',
  };
  private fotos = {
    titulo: 'FOTOGRAFIAS',
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
    empresa: 'Micap',
    derechos: 'Todos los Derechos Reservados',
    graciasA: 'Organizado por ',
    by: '_Empresa_',
  };

  public indice = 0;
  public indice2 = 0;

  cambiar1(newelemet: number) {
    console.log(newelemet);
    this.indice = newelemet;
  }

  cambiar2(newelemet: number) {
    console.log(newelemet);
    this.indice2 = newelemet;
  }

  mensaje() {
    alert('Se ha inscrito con exito.');
  }

  ngOnInit(): void {
    this.MostrarTabla();
  }

  constructor(private _inscripcionService: InscripcionService) {
  }

  public MostrarTabla() {
    this._inscripcionService.obtenerLista()
      .subscribe({
        next: (data) => {
          this.items = data;
        },
        error: (err) => {
          console.error('Error!:', err);
        },
        complete: () => {
          console.log('Obtener Datos OK.');
        }
      });
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
          this.MostrarTabla();
        }
      });
  }
}
