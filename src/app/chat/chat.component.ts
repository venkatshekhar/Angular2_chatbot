import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ChatMessage } from './chat-message'
import { ChatService } from './chat.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ ChatService ]
})

export class ChatComponent implements OnInit {

  messages: ChatMessage[] = [];
  chatMessages: string = "";
  userInputMessage: string = "";
  errorMessage: string = "";

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    //this.messages.push(new ChatMessage("Bot", "Welcome, I am your Banking Assistant") );
    this.sendMessageToServer( this.userInputMessage );
  }
  
  onFormSubmit(event)  {
    this.chatMessages = this.chatMessages + "You: " + this.userInputMessage;
    this.messages.push(new ChatMessage("User", this.userInputMessage) );
    this.sendMessageToServer( this.userInputMessage );    
    this.userInputMessage = "";
  }
  
  sendMessageToServer(message: string) {
    this.chatService.sendMessageWithObservable(this.userInputMessage).subscribe(
          replies  => this.parseReplies(replies),
          error =>  this.errorMessage = <any>error);
  }
  
  parseReplies(replies: string[]) {
    for(var i = 0; i < replies.length; i++) {
        this.messages.push(new ChatMessage("Bot", replies[i]) );
    }
  }
  
}
