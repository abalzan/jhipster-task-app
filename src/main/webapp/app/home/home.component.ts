import { TaskService } from '../entities/task/task.service';
import { Task } from '../entities/task/task.model';
import { ResponseWrapper } from '../shared/model/response-wrapper.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.css'
    ]

})
export class HomeComponent implements OnInit {

  tasks: Task[] = [];
  
  constructor(private taskService: TaskService){ }
    
    loadAll() {
        this.taskService.query().subscribe(
            (res: ResponseWrapper) => {
                this.tasks = res.json;
            },
            (res: ResponseWrapper) => console.log(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
    }
}
