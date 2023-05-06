import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent {
  isChatBoxOpen = false;
  userInput = '';

  toggleChatBox() {
    this.isChatBoxOpen = !this.isChatBoxOpen;
  }

  sendMessage() {
    if (this.userInput.trim() !== '') {
      // Add your logic for sending messages
      console.log(this.userInput);
      this.userInput = '';
    }
  }
}
