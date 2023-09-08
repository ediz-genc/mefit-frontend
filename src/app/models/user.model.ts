import { UserRole } from "../enums/user-role.enum"
import { Goal } from "./goal.model"

export interface User {
    userId: string
    username: string
    role: string
    profilePicUrl: string
    bio: string
    weight: string
    length: string
    currentGoalId: number
    goalHistoryIds: number[]
}