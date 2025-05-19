import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  words = [
    { text: 'Creativa', transform: '' },
    { text: 'Comprometida', transform: '' },
    { text: 'Empática', transform: '' },
    { text: 'Analítica', transform: '' },
    { text: 'Proactiva', transform: '' },
    { text: 'Responsable', transform: '' },
    { text: 'Colaboradora', transform: '' },
    { text: 'Organizada', transform: '' },
    { text: 'Eficiente', transform: '' },
    { text: 'Flexible', transform: '' },
    { text: 'Optimista', transform: '' },
    { text: 'Sociable', transform: '' },
    { text: 'Honesta', transform: '' },
    { text: 'Colaborativa', transform: '' },
  ];

  selectedExperience: string = '';

  experiences = [
    { name: 'UNCP',description: 'Estudiante 9no ciclo' },
    { name: 'DEVDATEP',cargo:"Practicante en analista de documentación", description: '● Participación en la creación y revisión de Historias de Usuario (HU).\n' +
  '● Definición de tareas relacionadas con base de datos, frontend y backend.\n' +
  '● Apoyo en el testing de los proyectos desarrollados.' },
    { name: 'INSTITUTO CONTINENTAL',cargo:"Practicante de levantamiento de procesos e información", description: '● Elaboración de flujo de procesos (As Is / To be).\n' +
  '● Elaboración de documentos técnicos, funcionales y manuales.\n' +
  '● Apoyo en análisis de mejora de procesos.\n' + '● Proyecciones de infraestructura y estudiantes.' },
    { name: 'I.E. VIRGEN DE FÁTIMA',cargo:"Integrante de proyecto", description: '● La planificación del proyecto (metas, plazos y resultados).\n' +
  '● Prever posibles obstáculos en la implementación, como problemas técnicos, retrasos, o resistencias organizacionales.\n' +
  '● Supervisión de la implementación Técnica' }
  ];
  
  skills = [
    { name: 'HTML', percent: 50 },
    { name: 'CSS', percent: 60 },
    { name: 'JavaScript', percent: 50 },
    { name: 'SQL', percent: 75 },
    { name: 'Bizagi', percent: 75 },
    { name: 'Figma', percent: 50 },
    { name: 'RStudio', percent: 50 },
    { name: 'Python', percent: 70 },
    { name: 'Jira', percent: 60 },
    { name: 'Trello', percent: 60 },
    { name: 'PowerBI', percent: 70 },
    { name: 'Microsoft Office', percent: 80 }
  ];


  containerWidth = 0;
  containerHeight = 0;

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const container = document.querySelector('.relative') as HTMLElement;
      this.containerWidth = container.offsetWidth;
      this.containerHeight = container.offsetHeight;

      this.moveWordsRandomly();
      setInterval(() => this.moveWordsRandomly(), 3000);
    }
  }

  moveWordsRandomly() {
    this.words = this.words.map(word => {
      const x = Math.random() * (this.containerWidth - 100);
      const y = Math.random() * (this.containerHeight - 40);
      return {
        ...word,
        transform: `translate(${x}px, ${y}px)`
      };
    });
  }

  selectExperience(name: string) {
    this.selectedExperience = name;
  }

  get selectedExperienceData() {
    return this.experiences.find(e => e.name === this.selectedExperience);
  }
}
