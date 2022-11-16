/* eslint-disable no-unused-vars */
export declare global {
  export interface establishment {
    name: string
    price: number
    category?: string
    website?: string
    address?: string
    ground_floor_room?: boolean
    latitude: number
    longitude: number
    average_grade: number
    cover_photo?: string
    room_photo?: string[]
    landline?: string
    whatsapp?: string
  }
}
