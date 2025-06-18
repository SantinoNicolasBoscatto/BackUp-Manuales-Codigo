import { Component, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{
  
  // Con TS puedo definir una serie de valores que puede adoptar una variable, si no le paso 
  // alguno de esos 3 valores exactos tendre un error.
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private destroyRef = inject(DestroyRef);


  ngOnInit(): void {
    const interval = setInterval(() => {
      const rand = Math.random();
      if(rand < 0.5) this.currentStatus.set('online');
      else if(rand < 0.9) this.currentStatus.set('offline');
      else this.currentStatus.set('unknown');
    }, 5000)
    this.destroyRef.onDestroy(() => clearInterval(interval))
  }

}
