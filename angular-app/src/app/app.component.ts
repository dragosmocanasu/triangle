import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private appService: AppService) {}

  title = "Triangle";
  result = "";

  sidesForm = new FormGroup({
    firstSide: new FormControl('0'),
    secondSide: new FormControl('0'),
    thirdSide: new FormControl('0')
  });

  onSubmit() {
    this.appService.sendSides(this.sidesForm.value).subscribe((result : any) => {
      this.result = result;
      this.sidesForm.reset();
    });
  }
}