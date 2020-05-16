import { Component, OnInit } from '@angular/core';;

@Component({
  // selector: 'angularapp-servers',
  // selector: '[angularapp-servers]',
  selector: '.angularapp-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = '';
  severCreated = false;
  serverStatus = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.severCreated = true;
    this.serverStatus = true;
  }

  getColor(){
    if(!this.serverStatus){
      return {color:'red'};
    }else{
      return {color:'green'};
    }
  }
}
