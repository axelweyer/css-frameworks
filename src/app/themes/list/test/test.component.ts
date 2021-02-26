import { Component, Input, OnInit } from '@angular/core';
import { ThemeComponent } from '../../shared/constants/theme.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, ThemeComponent {
  
  @Input() data: any;

  constructor() { 
    console.log('testComponent')
  }

  ngOnInit(): void {
  }

}
