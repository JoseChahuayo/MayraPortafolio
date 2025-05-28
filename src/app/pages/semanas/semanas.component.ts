import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-semanas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './semanas.component.html',
})


export class SemanasComponent {

  // ngOnInit() {
  //   const savedColumns = localStorage.getItem('columns');
  //   if (savedColumns) {
  //     this.columns = JSON.parse(savedColumns);
  //   }
  // }
    semanas = [
    {
      titulo: 'Semana 1',
      descripcion: 'Presentación Syllabus',
      imagen: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/2147489778/images/Y3RFbrVrTvG0GlYFjcXP_40._shutterstock_497978929.jpg',
      ruta: '/semanas/1'
    },
    {
      titulo: 'Semana 2',
      descripcion: 'Teoría FrontEnd y Backend',
      imagen: 'https://www.ensalza.com/blog/wp-content/uploads/frontend-y-backend.png',
      ruta: '/semanas/2'
    },
    {
      titulo: 'Semana 3',
      descripcion: 'Código Emmet',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3asE-gxgF6eKFHdX4vjpegHrVvKokOjS1WqrzuJ3EHVcG3nYsu7UhAv7hFIDCfpb07g&usqp=CAU',
      ruta: '/semanas/3'
    },
    {
      titulo: 'Semana 4',
      descripcion: 'HTML Básico y Avanzado',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGj99FItnBaAZP877GogCmsg8256IUm3Hag&s',
      ruta: '/semanas/4'
    },
    {
      titulo: 'Semana 5',
      descripcion: 'CSS Básico y Avanzado',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO3lOi5pa0IHvhssVg0iv2v6tY27RmDozQGA&s',
      ruta: '/semanas/5'
    },
    {
      titulo: 'Semana 6',
      descripcion: 'Bootstrap, Tailwind Y JavaScript Básico',
      imagen: 'https://w3sniff.com/common/article/bootstrap-vs-tailwindcss1.png',
      ruta: '/semanas/6'
    },
    {
      titulo: 'Semana 7',
      descripcion: 'REACT',
      imagen: 'https://www.pragimtech.com/wp-content/uploads/2021/03/ReactJS.jpg',
      ruta: '/semanas/7'
    },
    {
      titulo: 'Semana 8',
      descripcion: 'Hooks en React',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdeWD_7svCRuBKBsGZixNxk9t-Gob8ceayw&s',
      ruta: '/semanas/8'
    },
    // {
    //   titulo: 'Semana 9',
    //   descripcion: '',
    //   imagen: 'https://i.blogs.es/9af51d/emmet/1024_2000.webp',
    //         ruta: '/semanas/9'

    // },
    // {
    //   titulo: 'Semana 10',
    //   descripcion: '',
    //   imagen: 'https://i.blogs.es/9af51d/emmet/1024_2000.webp',
    //   ruta: '/semanas/10'

    // },
    // {
    //   titulo: 'Semana 11',
    //   descripcion: '',
    //   imagen: 'https://i.blogs.es/9af51d/emmet/1024_2000.webp',
    //   ruta: '/semanas/11'

    // },
    // {
    //   titulo: 'Semana 12',
    //   descripcion: '',
    //   imagen: 'https://i.blogs.es/9af51d/emmet/1024_2000.webp',
    //   ruta: '/semanas/12'
    // },
    // {
    //   titulo: 'Semana 13',
    //   descripcion: '',
    //   imagen: 'https://i.blogs.es/9af51d/emmet/1024_2000.webp',
    //   ruta: '/semanas/13'
    // },
    // {
    //   titulo: 'Semana 14',
    //   descripcion: '',
    //   imagen: 'https://i.blogs.es/9af51d/emmet/1024_2000.webp',
    //   ruta: '/semanas/14'
      
    // },
  ];
  columns = [
  {
    id: 1,
    title: 'Pendiente',
    tasks: [{ id: 9, title: 'Semana 9' }, { id: 10, title: 'Semana 10' }, { id: 11, title: 'Semana 11' }, { id: 12, title: 'Semana 12' }, { id: 13, title: 'Semana 13' }, { id: 14, title: 'Semana 14' }]
  },
  {
    id: 2,
    title: 'En Proceso',
    tasks: [{ id: 8, title: 'Semana 8' }]
  },
  {
    id: 3,
    title: 'Hecho',
    tasks: [{ id: 1, title: 'Semana 1' }, { id: 2, title: 'Semana 2' }, { id: 3, title: 'Semana 3' }, { id: 4, title: 'Semana 4' }, { id: 5, title: 'Semana 5' }, { id: 6, title: 'Semana 6' }, { id: 7, title: 'Semana 7' }]
  }
];

draggedTask: any = null;


onDragStart(task: any) {
  this.draggedTask = task;
}

onDragOver(event: DragEvent) {
  event.preventDefault(); 
}

onDrop(targetColumnId: number) {
  if (!this.draggedTask) return;

  for (const column of this.columns) {
    const index = column.tasks.findIndex((t: any) => t.id === this.draggedTask.id);
    if (index !== -1) {
      column.tasks.splice(index, 1);
      break;
    }
  }

  const targetColumn = this.columns.find(c => c.id === targetColumnId);
  if (targetColumn) {
    targetColumn.tasks.push(this.draggedTask);
  }

  this.draggedTask = null;

  localStorage.setItem('columns', JSON.stringify(this.columns));
}
}
