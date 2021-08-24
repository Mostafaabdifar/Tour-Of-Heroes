import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title :string= 'Tour Of Heros';
  showDashboard :boolean = false;
  showList : boolean = false;
  showDetails :boolean = false;
  Hero1 :string = "Hero1";
  Hero2 :string = "Hero2";
  Hero3 :string = "Hero3";
  Hero4 :string = "Hero4";
  hero :string = "Hero";
  


  clickDashboard(){
    this.showDashboard = true;
    this.showList = false
    this.showDetails = false;
  }

  clickShowList(){
    this.showList = true;
    this.showDashboard = false;
  }
  clickShowDetails(){
    this.showDetails = true;
    this,this.showList= false;
  }
  setHero(){
    this.Hero1 =this.hero;
    this.showDetails =false;
    this.showList =true;
  }
}
