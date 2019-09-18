import {Component, OnInit} from "@angular/core";
import {RESOURCE} from "../../../resource";

@Component({
  selector: 'super-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})

export class FooterComponent implements OnInit {
  public ASSETS = RESOURCE.ASSETS;

  constructor() {}

  public ngOnInit(): void {}
}
