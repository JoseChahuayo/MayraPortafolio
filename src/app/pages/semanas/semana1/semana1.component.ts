import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-semana1',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './semana1.component.html',
})
export class Semana1Component  {
  title = '';
  subtitle = '';

  private fullTitle = 'SEMANA 1';
  private fullSubtitle = 'Presentación del Syllabus';

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