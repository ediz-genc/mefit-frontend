import { Goal } from "./goal.model";
import { Workout } from "./workout.model";

export interface Program {
    programId: number
    name: string
    description: string
    imgUrl: string
    category: string;
    workouts: number[]
    goals: number[]
}

