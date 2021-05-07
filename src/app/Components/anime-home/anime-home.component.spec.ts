import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeHomeComponent } from './anime-home.component';

describe('AnimeHomeComponent', () => {
  let component: AnimeHomeComponent;
  let fixture: ComponentFixture<AnimeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
