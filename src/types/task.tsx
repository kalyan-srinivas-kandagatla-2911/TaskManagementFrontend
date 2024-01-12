export type Task = {
    Status: Status, 
    id?: string,
    title: string,
    description: string,
    deadline: Date,
    files?: string[] | null,
    sub_id?: string
}

export type Status = 'Pending' | 'Expired' | 'Approved' | 'Submitted'