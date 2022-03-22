import { HeaderComponent } from './header.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { NavigatorService } from '../../core/utils/services/navigator.service';
import { IntegrationService } from '@app/core';
import { DataRouteService } from '@app/core/utils/services/data-route.service';
import { RoutingService } from '@app/services/routing/routing.service';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      const MockDataRouteService = jasmine.createSpyObj('DataRouteService', [
        'dataRoute$',
        'init',
      ]);
      const MockNavigatorService = jasmine.createSpyObj('navigatorService', [
        'isMobile',
      ]);
      const MockRoutingService = jasmine.createSpyObj('RoutingService', [
        'navigate',
        'back',
        'exitFlow',
      ]);
      const MockIntegrationService = jasmine.createSpyObj(
        'IntegrationService',
        ['getIntegrationSfut']
      );

      MockDataRouteService.dataRoute$ = of(undefined);

      TestBed.configureTestingModule({
        declarations: [HeaderComponent],
        providers: [
          {
            provide: IntegrationService,
            useValue: MockIntegrationService,
          },
          {
            provide: NavigatorService,
            useValue: MockNavigatorService,
          },
          {
            provide: DataRouteService,
            useValue: MockDataRouteService,
          },
          {
            provide: RoutingService,
            useValue: MockRoutingService,
          },
        ],
        imports: [RouterTestingModule, HttpClientModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      });
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.text = 'Header component';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
