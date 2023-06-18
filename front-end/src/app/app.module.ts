import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SectionModule } from './section/section.module';

// 모듈은 독립적인 박스
@NgModule({
  // 모듈이 컴포넌트를 사용한다고 선언, 컴포넌트는 하나의 모듈에만 속할 수 있다.
  declarations: [
    AppComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, SectionModule],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
