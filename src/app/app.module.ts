import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Подключаем HttpClientModule
    FormsModule, // Если не добавлено ранее
  ],
  providers: [HttpClientModule],
  bootstrap: []
})
export class AppModule {}
