import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-understanding-angular",
  templateUrl: "./understanding-angular.component.html",
  styleUrls: ["./understanding-angular.component.css"]
})
export class UnderstandingAngularComponent implements OnInit {
  public title = "Home Page";
  public siteURL = window.location.href;
  public date = new Date();

  @Input("parentData") public name;
  @Output() public childEvent = new EventEmitter();

  public colors = ["red", "yellow", "blue", "green", "black", "gray"];

  constructor() {}

  ngOnInit(): void {}

  fireEvent() {
    this.childEvent.emit("Hey Codevolution");
  }
}
