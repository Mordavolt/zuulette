import { Component, Input, OnInit } from '@angular/core';
import { Round } from '../round';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})
export class RoundComponent implements OnInit {

  @Input() round: Round;

  constructor() {
  }

  ngOnInit(): void {
  }

}
