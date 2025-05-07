import { Component, AfterViewInit } from '@angular/core';

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
    { text: 'Curiosa', transform: '' },
    { text: 'Comprometida', transform: '' },
    { text: 'Resiliente', transform: '' },
    { text: 'Empática', transform: '' },
    { text: 'Analítica', transform: '' },
    { text: 'Proactiva', transform: '' },
    { text: 'Responsable', transform: '' },
    { text: 'Colaboradora', transform: '' },
    { text: 'Intuitiva', transform: '' },
    { text: 'Organizada', transform: '' },
    { text: 'Eficiente', transform: '' },
    { text: 'Flexible', transform: '' },
    { text: 'Innovadora', transform: '' },
    { text: 'Dedicada', transform: '' },
    { text: 'Motivada', transform: '' },
    { text: 'Optimista', transform: '' },
    { text: 'Sociable', transform: '' },
    { text: 'Honesta', transform: '' },
    { text: 'Responsiva', transform: '' },
    { text: 'Colaborativa', transform: '' },
  ];

  selectedExperience: string = '';

  experiences = [
    { name: 'empresa 1', description: 'Descripción de empresa 1: trabajé en frontend con Angular.' },
    { name: 'empresa 2', description: 'Descripción de empresa 2: desarrollé aplicaciones móviles con Flutter.' },
    { name: 'empresa 3', description: 'Descripción de empresa 3: fui parte del equipo de backend con Node.js.' },
    { name: 'empresa 4', description: 'Descripción de empresa 4: colaboré en análisis de datos y dashboards.' }
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

  get selectedDescription(): string {
    const exp = this.experiences.find(e => e.name === this.selectedExperience);
    return exp ? exp.description : '';
  }
}
