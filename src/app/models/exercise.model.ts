import { FitnessLevel } from "../enums/fitness-level.enum"

export interface Exercise {
    id: number
    name: string
    description: string
    muscleGroup: string
    img: string
    video: string
    fitnessLevel: FitnessLevel
    workouts: []
}