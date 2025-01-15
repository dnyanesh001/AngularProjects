import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  h2Title = "This is h2";
  title = 'student-management-system';
  a = 25;
  b = 12;
  html = "My name is John Doe";

  getFullName() {
    return "John Doe";
  }
  buttonClicked(ev: any) {
    alert("You clicked me");
  }
  ifMouseOver = false;
  mouseOverHandler(ev: any) {
    console.log(ev);
    this.ifMouseOver = true;
  }
  mouseOutHandler(ev: any) {
    this.ifMouseOver = false;
  }
  StudentList = [{
    name: "John Doe",
    gender: "Male",
    dob: "24-10-2021",
    percentage : 70
  }, {
    name: "Dnyanesh Bhole",
    gender: "Male",
    dob: "24-2-2021",
    percentage : 90
  }, {
    name: "Jyoti Rane",
    gender: "Female",
    dob: "5-12-2021",
    percentage : 80
  }];

  hasPermission = true;

  toggleHasPermission(ev: any) {
    this.hasPermission = !this.hasPermission;
  }

  num1 = 20;
  num2 = 30;

  //Form Variable
  student = {
    userName : "John Doe",
    dob : "",
    email : "",
    mobile : ""
  }

  bGColor = 6;
}
