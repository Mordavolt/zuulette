import { Injectable } from '@angular/core';
import { Exercise } from './exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  constructor() {
  }

  exercises: Exercise[] = [{
    name: 'Bulldog',
    image: 'assets/img/1-bulldog.png',
    description: '<ul><li>Capoeira</li></ul>'
  }, {
    name: 'Bear crawl',
    image: 'assets/img/2-bear-crawl.png',
    description: '<ul><li>Opposite arm, leg</li><li>Parallel</li></ul>'
  }, {
    name: 'Iguana',
    image: 'assets/img/3-iguana.png',
    description: '<ul><li>Plank</li><li>One arm step</li><li>Opposite leg 45&#176;</li><li>Push-up</li></ul>'
  }, {
    name: 'Explosive hops',
    image: 'assets/img/4-explosive-hops.png',
    description: '<ul><li>Explosive</li></ul>'
  }, {
    name: 'Warm walk',
    image: 'assets/img/5-warm-walk.png',
    description: '<ul><li>Backwards</li><li>Jump back</li><li>Walk with arms</li></ul>'
  }, {
    name: 'Duck walk',
    image: 'assets/img/6-duck-walk.png',
    description: '<ul><li>On heels</li></ul>'
  }, {
    name: 'Half hindu',
    image: 'assets/img/7-half-hindu.png',
    description: '<ul><li>Arms along body</li><li>Go low</li><li>Return upside</li></ul>'
  }, {
    name: 'Sumo',
    image: 'assets/img/8-sumo.png',
    description: '<ul><li>Scissors front/back 2x</li><li>Both arms go down</li><li>Wide stand squat</li></ul>'
  }, {
    name: 'Polar bear',
    image: 'assets/img/9-polar-bear.png',
    description: '<ul><li>Wide legs</li><li>Closer is harder</li><li>Shoulder push ups</li></ul>'
  },
    {
      name: 'Kobra',
      image: 'assets/img/10-kobra.png',
      description: '<ul><li>Arms wide</li><li>Fingers point sideways</li><li>Go left, right-middle-up</li></ul>'
    },
    {
      name: 'Snake',
      image: 'assets/img/11-snake.png',
      description: '<ul><li>Push up</li><li>Go forwards/backwards</li><li>Arms along body</li></ul>'
    },
    {
      name: 'Frog',
      image: 'assets/img/12-frog.png',
      description: '<ul><li>Wide knees</li><li>Legs wider than shoulders</li><li>Arms go down</li></ul>'
    },
    {
      name: 'Gorilla',
      image: 'assets/img/13-gorilla.png',
      description: '<ul><li>Deep sit up</li><li>Arms down</li><li>Layout</li><li>Jump</li></ul>'
    }
  ];

  currentExercises: Exercise[] = [];

  private static stripNRandomElements(currentExercises: Exercise[], n: number) {
    const result: Exercise[] = [];
    currentExercises.sort(() => 0.5 - Math.random());
    for (let i = 0; i < n; i++) {
      result.push(currentExercises.pop());
    }
    return result;
  }

  getRandomCyclicExercises(count: number): Exercise[] {
    if (count > this.currentExercises.length) {
      const result = Array.from(this.currentExercises);
      this.currentExercises = Array.from(this.exercises);
      return [...result, ...ExerciseService.stripNRandomElements(this.currentExercises, count - result.length)];
    } else {
      return ExerciseService.stripNRandomElements(this.currentExercises, count);
    }

  }

}
