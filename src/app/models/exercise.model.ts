import { FitnessLevel } from "../enums/fitness-level.enum"
import { Workout } from "./workout.model"

export interface Exercise {
    exerciseId: number
    name: string
    description: string
    muscleGroup: string
    imgUrl: string
    vidUrl: string
    fitnessLevel: string
    workoutIds: number[]
}