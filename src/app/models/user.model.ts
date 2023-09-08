import { UserRole } from "../enums/user-role.enum"
import { Goal } from "./goal.model"

export interface User {
    id: string
    username: string
    profilePicUrl: string
    bio: string
    weight: number
    length: number
    currentGoalId: number
    goalHistoryId: number[]
}