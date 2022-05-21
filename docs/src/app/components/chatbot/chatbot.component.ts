import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  persona: any;
  nuevoMensaje: string = "";

  mensajes: any = [
  {
    emisor: "id",
    texto: "Hola que tal"
  }, {
    emisor: "id",
    texto: "Todo bien y tú?"
  }, {
    emisor: "id",
    texto: "Todo perfecto"
  }, {
    emisor: "id",
    texto: "Hola a todos"
  }, {
    emisor: "id",
    texto: "Hola 2"
  },
  {
    emisor: "id",
    texto: "Hola 3"
  }]

  constructor() { }

  ngOnInit(): void {
  }

  enviarMensaje(){
    console.log(this.nuevoMensaje);
    this.nuevoMensaje = "";
  }

}
