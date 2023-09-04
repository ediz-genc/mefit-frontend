import { UserRole } from "../enums/user-role.enum"
import { Goal } from "./goal.model"

export interface User {
    id: number
    username: string
    role: string
    profilePicUrl: string
    bio: string
    weight: string
    length: string
    currentGoal: Goal
    goalHistory: Goal[]
}