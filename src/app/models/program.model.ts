import { Goal } from "./goal.model";
import { Workout } from "./workout.model";

export interface Program {
    id: number
    name: string
    description: string
    imgUrl: string
    category: string;
    workouts: Workout[]
    goals: Goal[]
}

