import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Esta funcion viene a ser el SetUp(), es el que prepara el entorno global para realizar los Unit-Tests.
// En este configurare que Componentes quiero testear.
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  // Cada It() sera un tests, este tendra una descripcion de que testea y una Callback con el metodo a testear.
  it('should create the app', () => {
    // Creamos una instancia del componente a testear
    const fixture = TestBed.createComponent(AppComponent);
    // Verificamos que nuestro componente tenga una instancia
    const app = fixture.componentInstance;
    // Verificamos el resultado
    expect(app).toBeTruthy();
  });

  it(`should have the 'testing-project' title`, () => {
    // Creamos una instancia del componente a testear
    const fixture = TestBed.createComponent(AppComponent);
    // Verificamos que nuestro componente tenga una instancia
    const app = fixture.componentInstance;
    // Verificamos que la variable title sea igual a testing-project
    expect(app.title).toEqual('testing-project');
  });

  it('should render title', () => {
    // Creamos una instancia del componente a testear
    const fixture = TestBed.createComponent(AppComponent);
    // Ejecutamos el OnChanges manualmente para ver si el componente renderizo algo
    fixture.detectChanges();
    // Seleccionamos el HTML del componente
    const compiled = fixture.nativeElement as HTMLElement;
    // Verificamos que el titulo exista y contenga la data
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, testing-project');
  });
});
