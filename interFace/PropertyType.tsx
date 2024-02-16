export interface PropertyTypes {
    status: number
    type: string
    message: string
    data: Daum[]
}

export interface Daum {
    _id: string
    title: string
    status: string
    isDeleted: boolean
    createdAt: string
    updatedAt: string
}