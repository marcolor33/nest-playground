// all thosin config.json will be in here
export interface UserProfile {
    id: number
    uesrId: number

    status: 'pending' | 'active' | 'disable'

    createdAt: Date
    createdBy: string
}
