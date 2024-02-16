export interface LeaseTypes {
    status: number
    type: string
    message: string
    data: Daum[]
  }
  
  export interface Daum {
    _id: string
    title: string
  }
  