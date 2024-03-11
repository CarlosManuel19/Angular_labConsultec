import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Me devuelve la palabra fizz cuando es multiplo de tres'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizzBuzz(9)).toEqual('fizz');
  });

  it(`should return buzz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizzBuzz(25)).toEqual('buzz');
  });

  it(`should return fizbuzz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizzBuzz(15)).toEqual('fizzbuzz');
  });


  it(`should return false si las palabras son exactamente iguales`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.esAnagrama("roma","roma")).toEqual(false);
  });

  it(`should return false si las palabras tienen diferente longitud`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.esAnagrama("roma","roma")).toEqual(false);
  });

  it(`verificamos si cada letra está presente en la primera palabra con la misma frecuencia`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.esAnagrama("Nacionalista","ancionalista")).toEqual(true);
  });


  


});
