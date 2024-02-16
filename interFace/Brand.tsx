export interface BrandTypes {
    status: number
    type: string
    message: string
    data: Daum[]
  }
  
  export interface Daum {
    isDeleted: boolean
    _id: string
    title: string
    image: string
    status: string
    property_sub_title: string
  }
  