import { Component, Input, OnInit } from '@angular/core';
import { Round } from '../round-domain/round';
import { ExerciseService } from '../exercise-domain/exercise.service';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  count: number;
  max: number;
  min: number;

  rounds: Round[];

  constructor(private exerciseService: ExerciseService) {
    this.count = 3;
    this.max = 8;
    this.min = 2;
  }

  ngOnInit() {
    this.shuffleRounds();
  }

  updateRoundCount(event: MatSliderChange) {
    this.count = event.value;
    this.shuffleRounds();
  }

  updateRoundMax(event: MatSliderChange) {
    this.max = event.value;
    this.shuffleRounds();
  }

  updateRoundMin(event: MatSliderChange) {
    this.min = event.value;
    this.shuffleRounds();
  }

  shuffleRounds() {
    this.rounds = [];
    for (let i = 0; i < this.count; i++) {
      const randomExercisesToTake = Math.floor(Math.random() * (this.max + 1 - this.min) + this.min);
      this.rounds.push({
        name: 'Round ' + (i + 1),
        exercises: this.exerciseService.getRandomCyclicExercises(randomExercisesToTake)
      });
    }
  }
}
