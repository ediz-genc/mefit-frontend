import { Program } from "./program.model"
import { User } from "./user.model"
import { Workout } from "./workout.model"

export interface Goal {
    goalId: number
    name: string
    startDate: string
    endDate: string
    completed: boolean
    user: number
    programs: number[]
    workouts: number[]
}