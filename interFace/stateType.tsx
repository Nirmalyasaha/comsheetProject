export interface StateTypes {
    status: number
    data: Daum[]
    message: string
  }
  
  export interface Daum {
    _id: string
    title: string
    short_code: string
    isTaxFree: boolean
    taxPercentage: string
  }
  