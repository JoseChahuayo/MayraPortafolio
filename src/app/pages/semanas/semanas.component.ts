import { Component } from '@angular/core';

@Component({
  selector: 'app-semanas',
  imports: [],
  templateUrl: './semanas.component.html',
})
export class SemanasComponent {
  columns = [
  {
    id: 1,
    title: 'Pendiente',
    tasks: [{ id: 1, title: 'Tarea 1', week: 'Semana 1' }]
  },
  {
    id: 2,
    title: 'En Proceso',
    tasks: []
  },
  {
    id: 3,
    title: 'Hecho',
    tasks: []
  }
];

draggedTask: any = null;


onDragStart(task: any) {
  this.draggedTask = task;
}

onDragOver(event: DragEvent) {
  event.preventDefault(); // permite que el elemento se pueda soltar
}

onDrop(targetColumnId: number) {
  if (!this.draggedTask) return;

  // Quitar la tarea de su columna original
  for (const column of this.columns) {
    const index = column.tasks.findIndex((t: any) => t.id === this.draggedTask.id);
    if (index !== -1) {
      column.tasks.splice(index, 1);
      break;
    }
  }

  // Agregar la tarea a la nueva columna
  const targetColumn = this.columns.find(c => c.id === targetColumnId);
  if (targetColumn) {
    targetColumn.tasks.push(this.draggedTask);
  }

  // Limpiar
  this.draggedTask = null;
}


}
