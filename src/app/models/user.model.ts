import { UserRole } from "../enums/user-role.enum"

export interface User {
    id: number
    username: string
    role: UserRole
    img: string
    bio: string
    weight: string
    length: string
    goals: []
}