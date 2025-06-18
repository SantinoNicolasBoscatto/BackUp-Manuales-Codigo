import { Component, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink]
})
export class UserTasksComponent implements OnInit{
  ngOnInit(): void {
    // Me dara un Observable que a su vez contendra la DATA (Tanto la estatica como la dinamica)
    this.activatedRoute.data.subscribe({
      next: data => {
        console.log(data);
      }
    })
  }
  private activatedRoute = inject(ActivatedRoute);
  userName = input.required<string>();
  message = input.required<string>();
}

// Este Resolve sera llamado cada vez que se produzca una navegacion, por ello le pasamos 
// la snapshot del ActivatedRoute, ya que es innecesaria la suscripcion.
export const resolveUserName: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => 
{
  const userService = inject(UsersService);
  const userName = userService.users.find(x => x.id === activatedRoute.paramMap.get('userId'))?.name || '';
  // Esta funcion debe devolver la data que genera esta funcion, esa data se almacenara en el Resolve
  return userName;
}

export const resolveTitle: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => 
{
  return resolveUserName(activatedRoute, routerState) + '\'s Tasks'
}