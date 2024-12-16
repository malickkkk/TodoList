import { Component } from '@angular/core';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';  // Importation

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [KanbanBoardComponent]  // Ajouter KanbanBoardComponent ici
})
export class AppComponent {
  title = 'TodoList';
}
