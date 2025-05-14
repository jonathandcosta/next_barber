'use server'

import { getServerSession } from "next-auth"
import { db } from "../_lib/prisma"
import { authOptions } from "../_lib/auth"

interface createBookingParams {
  userId: string
  serviceId: string
  date: Date
}
export const createBooking = async (params: createBookingParams) => {
  const user = await getServerSession(authOptions)
  if(!user) {
    throw new Error("usuário não autenticado")
  }
  await db.booking.create({
    data: params,
  })
}