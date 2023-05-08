import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../Services/AppointmentService/appointment.service';


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent  implements OnInit
 {
  isChatBoxOpen = false;
  userInput = '';
  flag = false;
  nid: any;
  pid: any;
  issues: any;
  output: any;

  constructor(private service: AppointmentService) {}

  ngOnInit(): void {
    this.nid = window.history.state.nid;
    this.GetPidByNid();
    this.getAllIssues();
  }


  getAllIssues(){
    this.service.getIssues().subscribe((data: any) =>
      {this.issues = data;}
    );
  }

  GetPidByNid(){
    this.service.GetPidByNid(this.nid).subscribe((data: any) =>
    {this.pid = data;}
    );
  }

  toggleChatBox() {
    this.isChatBoxOpen = !this.isChatBoxOpen;

    if (!this.flag)
    {
      this.flag = true;
      this.service.StartNewChat(this.pid, this.issues).subscribe();
    }
  }

  sendMessage() {
    if (this.userInput.trim() !== '') {

    this.service.SaleemGPT(this.userInput).subscribe({
      next: (data: any) => this.output = data,
      complete: () => console.log(this.output)

    });

    }
  }
}
