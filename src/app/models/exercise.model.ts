import { FitnessLevel } from "../enums/fitness-level.enum"

export interface Exercise {
    exerciseId: number
    name: string
    description: string
    muscleGroup: string
    img: string
    video: string
    fitnessLevel: FitnessLevel
    workouts: []
}