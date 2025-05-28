import { Component } from '@angular/core';

@Component({
  selector: 'app-semana5',
  imports: [],
  templateUrl: './semana5.component.html',
})
export class Semana5Component {
  title = '';
  subtitle = '';

  private fullTitle = 'SEMANA 5';
  private fullSubtitle = 'CSS BÁSICO Y AVANZADO';

  ngOnInit(): void {
    this.typeWriter(this.fullTitle, 'title', 100).then(() => {
      this.typeWriter(this.fullSubtitle, 'subtitle', 50);
    });
  }

  async typeWriter(text: string, property: 'title' | 'subtitle', speed: number) {
    for (let i = 0; i <= text.length; i++) {
      this[property] = text.substring(0, i);
      await new Promise(resolve => setTimeout(resolve, speed));
    }
  }
}
