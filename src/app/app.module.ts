import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// Components modules
import { SharedModule } from './shared/components/shared.module';
import { StartPageModule } from './components/start-page/start-page.module';
import { QuizPageModule } from './components/quiz-page/quiz-page.module';
import { ResultPageModule } from './components/result-page/result-page.module';
// Other modules
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StartPageModule,
    SharedModule,
    QuizPageModule,
    ResultPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
