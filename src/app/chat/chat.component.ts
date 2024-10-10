import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{
  chatForm: FormGroup;
  messages: string[]=[]

  constructor(private fb:FormBuilder){
    this.chatForm=this.fb.group({
      search:['']
    });
  }

  ngOnInit():void{}

  onSubmit(){
    const message=this.chatForm.value.search;
    if(message.trim()){
      this.messages.push(message);
      this.chatForm.reset();
    }
  }
}
