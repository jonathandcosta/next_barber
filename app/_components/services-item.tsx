'use client'

import { Barbershop, BarbershopService } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Calendar } from "./ui/calendar";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { format, set } from "date-fns";
import { createBooking } from "../_actions/create-booking";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
interface ServiceItemProps {
  service: BarbershopService
  barbershop: Pick<Barbershop, "name">
}

const TIME_LIST = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
]

const ServiceItem = ({ service, barbershop }: ServiceItemProps) => {

  const [selectDay, setSelectDay] = useState<Date | undefined>(undefined)
  const handleDateSelect = (date: Date | undefined) => {
    setSelectDay(date)
  }

  const [selectTime, setSelectTime] = useState<string | undefined>(undefined)
  const handleTimeSelect = (time: string) => {
    setSelectTime(time)
  }


  const { data } = useSession()

  const handleCreateBooking = async () => {
    try {
      if (!selectDay || !selectTime) return
      const hour = Number(selectTime.split(":")[0])
      const minute = Number(selectTime.split(":")[1])
      const newDate = set(selectDay, {
        minutes: minute,
        hours: hour,
      })
      await createBooking({
        serviceId: service.id,
        userId: (data?.user as any).id,
        date: newDate,
      })
      toast.success("Reserva criada com sucesso!")
    } catch (error) {
      console.log(error)
      toast.error('Erro ao criar reserva!')
    }
  }

  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        <div className=" relative max-h-[110px] max-w-[110px] min-h-[110px] min-w-[110px]">
          <Image
            className="object-cover rounded-lg"
            fill
            alt={service.name}
            src={service.imageUrl} />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-bold">{service.name}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-primary">
              {Intl.NumberFormat("pt-BR", {
                style: 'currency',
                currency: "BRL",
              }).format(Number(service.price))}
            </p>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant='secondary' size='sm'>Reservar</Button>
              </SheetTrigger>
              <SheetContent className="px-0">
                <SheetHeader>
                  <SheetTitle>Fazer Reserva</SheetTitle>
                </SheetHeader>
                <div className="py-5 border-b border-solid">
                  <Calendar
                    mode="single"
                    locale={ptBR}
                    selected={selectDay}
                    onSelect={handleDateSelect}
                    styles={{
                      head_cell: {
                        width: "100%",
                        textTransform: "capitalize",
                      },
                      cell: {
                        width: "100%",
                      },
                      button: {
                        width: "100%",
                      },
                      nav_button_previous: {
                        width: "32px",
                        height: "32px",
                      },
                      nav_button_next: {
                        width: "32px",
                        height: "32px",
                      },
                      caption: {
                        textTransform: "capitalize",
                      },
                    }}
                  />
                </div>

                {selectDay && (
                  <div className="p-5 gap-3 flex overflow-x-auto [&::-webkit-scrollbar]:hidden border-b border-solid">
                    {TIME_LIST.map((time) => (
                      <Button
                        key={time}
                        variant={selectTime === time ? 'default' : 'outline'}
                        className="rounded-full"
                        onClick={() => handleTimeSelect(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                )}

                {selectTime && selectDay && (
                  <div className="p-5">
                    <Card>
                      <CardContent className="p-3 space-y-3">
                        <div className="flex items-center justify-between">
                          <h2 className="font-bold">{service.name}</h2>
                          <p className="text-sm font-bold">{Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          }).format(Number(service.price))}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <h2 className="text-sm text-gray-400">Data</h2>
                          <p className="text-sm capitalize">
                            {format(selectDay, "d 'de' MMMM", {
                              locale: ptBR,
                            })}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <h2 className="text-sm text-gray-400">Horário</h2>
                          <p className="text-sm">{selectTime}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <h2 className="text-sm text-gray-400">Barbearia</h2>
                          <p className="text-sm">{barbershop.name}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
                <SheetFooter className="px-5 mt-5">
                  <SheetClose asChild>
                    <Button
                      onClick={handleCreateBooking}
                      disabled={!selectDay || !selectTime}
                    >Confirmar</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ServiceItem;