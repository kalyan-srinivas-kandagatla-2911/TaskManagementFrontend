export type User = {
    id: string
    offId: string
    username: string
    email: string
    team:string
    role?: Role
}

export type Role = 'USER' | 'TEAM_ONE_HEAD' | 'TEAM_TWO_HEAD' | 'ADMIN'