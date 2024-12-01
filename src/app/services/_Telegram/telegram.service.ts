import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private botToken: string = '7401080779:AAG9Xqrl1YOS6MaFha1ymB3aXWCvFmPdEyY'; // Ваш токен бота
  private chatId: string = '-1002472894217'; // Ваш chat_id

  constructor(private http: HttpClient) {}

  sendMessage(feedback: { name: string; contact: string; review: string }): Observable<any> {
    const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
    const message = `
      Новая обратная связь:
      - Имя: ${feedback.name}
      - Контакт: ${feedback.contact}
      - Отзыв: ${feedback.review}
    `;

    const payload = {
      chat_id: this.chatId,
      text: message
    };

    return this.http.post(url, payload);
  }
}
