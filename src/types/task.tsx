export type Task = {
    status: Status, 
    id?: string,
    title: string,
    description: string,
    deadline: Date
}

export type Status = 'Pending' | 'Expired' | 'Approved' | 'Submitted'