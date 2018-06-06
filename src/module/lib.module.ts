import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { HttpIEHelperInterceptor } from './service/lib.service';

// Export module's public API
export { HttpIEHelperInterceptor } from './service/lib.service';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [ ],
  declarations: [ ]
})
export class HttpIEHelperModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HttpIEHelperModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpIEHelperInterceptor, multi: true },
      ]
    };
  }
}
