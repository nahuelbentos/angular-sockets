import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, OnDestroy {
  texto = '';
  mensajesSubscription: Subscription;
  constructor(private chatService: ChatService) {}
  ngOnDestroy(): void {
    this.mensajesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.mensajesSubscription = this.chatService
      .getMessages()
      .subscribe((msg) => {
        console.log(msg);
      });
  }

  enviar() {
    console.log(this.texto);
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }
}
