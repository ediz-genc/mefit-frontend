import { Exercise } from "./exercise.model"
import { Goal } from "./goal.model"
import { Program } from "./program.model"

export interface Workout {
    workoutId: number
    name?: string
    description?: string
    exerciseIds: number[]
    programId: number[]
    goalId: number[]
}