import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TelegramService } from '../../services/_Telegram/telegram.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cartel',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cartel.component.html',
  styleUrl: './cartel.component.css'
})
export class CartelComponent {
  menuActive = false;
  feedback = {
    name: '',
    contact: '',
    review: ''
  };

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

  scrollToSection(event: Event, targetId: string) {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  constructor(private telegramService: TelegramService) {}

  submitFeedback(event: Event) {
    event.preventDefault();

    this.telegramService.sendMessage(this.feedback).subscribe(
      response => {
        console.log('Сообщение успешно отправлено:', response);
        alert('Ваш отзыв отправлен!');
        this.feedback = { name: '', contact: '', review: '' }; // Очистка формы
      },
      error => {
        console.error('Ошибка при отправке сообщения:', error);
        alert('Ошибка отправки. Пожалуйста, попробуйте позже.');
      }
    );
  }
}
