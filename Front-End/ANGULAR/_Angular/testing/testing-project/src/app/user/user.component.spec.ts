import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from './data.service';

describe('UserComponent', () => {
  // Creo variables que faciliten su uso.
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  // Importo y configuro el componente a Testear
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent],
      providers: [UserService]
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should use the user name from the service', () => {
      let userService = TestBed.inject(UserService);
      fixture.detectChanges(); // En nuevas versiones quizas no hace falta, en antiguas si.
      expect(component.user?.name).toEqual(userService.user.name);
  });

  it('Should display the user name if user is logged in', () => {
      component.isLoggin = true;

      fixture.detectChanges(); 
      let compiled = fixture.nativeElement;
      expect(compiled.querySelector('p')?.textContent).toContain(component.user?.name)
  });

  it('Should NOT display the user name if user is logged in', () => {
      fixture.detectChanges(); 
      let compiled = fixture.nativeElement;
      expect(compiled.querySelector('p')?.textContent).not.toContain(component.user?.name)
  });

  // Cuando creamos un Testing sobre un servicio de terceros como una API no quiero
  // que la consulta sea hacia la API necesariamente, sino quiero simularla.
  it('Should Fetch data successfully if not called async', waitForAsync(() => {
      let dataService = TestBed.inject(DataService);

      // Con Spy basicamente hacemos un Mock, en vez de ejecutar getDetails, simularemos su ejecucion y devolveremos un valor.
      let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.data).toBe('Data');
      });
  }))
  
});
