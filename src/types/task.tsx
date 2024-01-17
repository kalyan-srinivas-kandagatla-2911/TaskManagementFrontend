import { User } from "./user"

export type Task = {
    id: string
    title: string
    description: string
    createdAt:Date | null
    updatedAt:Date | null
    deadline: Date | null
}

export type Status = 'Pending' | 'Expired' | 'Approved' | 'Submitted'