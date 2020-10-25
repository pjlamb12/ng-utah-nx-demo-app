import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@ng-utah/shared/components';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'admin-feature-home',
          loadChildren: () =>
            import('@ng-utah/admin/feature/home').then(
              (module) => module.AdminFeatureHomeModule
            ),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    SharedComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
