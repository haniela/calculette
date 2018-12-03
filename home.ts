import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pressure : any ;

  constructor(public navCtrl: NavController) {
    this.pressure = '';
  }
  
  press(touch : any) {
    if(touch == '0') {
      this.pressure += touch;
    }
    else if(touch == '00') {
      this.pressure += touch;
    }
    else if(touch == '1') {
      this.pressure += touch;
    }
    else if(touch == '2') {
      this.pressure += touch;
    }
    else if(touch == '3') {
      this.pressure += touch;
    }
    else if(touch == '4') {
      this.pressure += touch;
    }
    else if(touch == '5') {
      this.pressure += touch;
    }
    else if(touch == '6') {
      this.pressure += touch;
    }
    else if(touch == '7') {
      this.pressure += touch;
    }
    else if(touch == '8') {
      this.pressure += touch;
    }
    else if(touch == '9') {
      this.pressure += touch;
    }
    else if(touch == '/') {
      this.pressure += touch;
    }
    else if(touch == '*') {
      this.pressure += touch;
    }
    else if(touch == '+') {
      this.pressure += touch;
    }
    else if(touch == '-') {
      this.pressure += touch;
    }
    else if(touch == '.') {
      this.pressure += touch;
    }
    else if(touch == '(') {
      this.pressure += touch;
    }
    else if(touch == ')') {
      this.pressure += touch;
    }
    else if(touch == 'C') {
      this.pressure = '';
    }
    else if (touch == '<==') {
      this.pressure = '';
  }
  else if (touch == '=') {

      this.pressure = eval(this.pressure);
  }
   
}

  }