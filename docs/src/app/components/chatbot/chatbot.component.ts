import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  persona: string = "usuario";
  nuevoMensaje: string = "";
  mensajes: any = [
  {
    emisor: "usuario",
    texto: "Hola que tal"
  }, {
    emisor: "id",
    texto: "Todo bien y tú?"
  }, {
    emisor: "usuario",
    texto: "Todo perfecto"
  }, {
    emisor: "id",
    texto: "Hola a todos"
  }, {
    emisor: "usuario",
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

    let mensaje=
    {
      emisor: "usuario",
      texto: this.nuevoMensaje
    }

    this.mensajes.push(mensaje);
    this.nuevoMensaje = "";
  }

}
