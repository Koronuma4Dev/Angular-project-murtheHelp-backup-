import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrl: './todomanager.component.css'
})
export class TodomanagerComponent {
  tasks: string[] = []; 

  
  addTask(task: string) {
    if (task.trim()) {
      this.tasks.push(task.trim());
    }
  }


  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
