
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/searchIcons"
import BookingItem from "./_components/booking-item"
import Search from "./_components/search"
import Link from "next/link"


const page = async () => {

  // CHAMA O BANCO DE DADOS
  const barbershops = await db.barbershop.findMany({})

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Jonathan!</h2>
        <h3>Sexta, 2 de Fevereiro</h3>

        {/* BUSCA */}
        <div className="mt-6">
          <Search />
        </div>

        {/* NAVEGAÇÃO */}

        <div className="flex mt-6 gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title} />
                {option.title}
              </Link>
            </Button>
          ))}
        </div>

        {/* BANNER */}

        <div className="relative h-[150px] w-full mt-6">
          <Image
            alt="Agende com os melhores"
            src="/Banner01.png"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* AGENDAMENTOS */}
        <BookingItem />


        {/* RECOMENDADOS */}

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">recomendados</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/* POPULARES */}

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">populares</h2>
        <h1>adicionar + cards</h1>

      </div>
    </div >
  )
}

export default page