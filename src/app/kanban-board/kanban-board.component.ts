import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importation de CommonModule pour *ngFor et *ngIf
import { FormsModule } from '@angular/forms';   // Importation de FormsModule pour ngModel

@Component({
  selector: 'app-kanban-board',
  standalone: true,  
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css'],
  imports: [CommonModule, FormsModule]  // Ajout de FormsModule ici
})
export class KanbanBoardComponent {
  todoList = [
    { name: 'Préparer le planning de la semaine', completed: false },
    { name: 'Répondre aux emails importants', completed: false },
    { name: 'Faire une revue de code', completed: false }
  ];
  
  inProgressList = [
    { name: 'Développement du module de paiement', completed: false },
    { name: 'Rédaction de la documentation technique', completed: false }
  ];

  doneList = [
    { name: 'Refactorisation du code des APIs', completed: true },
    { name: 'Correction des bugs dans la base de données', completed: true }
  ];

  addTask(column: string) {
    const taskName = prompt('Entrez une nouvelle tâche:');
    if (taskName) {
      const newTask = { name: taskName, completed: false };
      if (column === 'todo') {
        this.todoList.push(newTask);
      } else if (column === 'inProgress') {
        this.inProgressList.push(newTask);
      } else if (column === 'done') {
        this.doneList.push(newTask);
      }
    }
  }
}
