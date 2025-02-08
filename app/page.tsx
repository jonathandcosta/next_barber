import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"


const page = async () => {

  // CHAMA O BANCO DE DADOS
  const barbershops = await db.barbershop.findMany({})

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Jonathan!</h2>
        <h3>Sexta, 2 de Fevereiro</h3>

        <div className=" mt-6 flex items-center gap-2">
          <Input placeholder="Buscar" />
          <Button >
            <SearchIcon />
          </Button>
        </div>

        {/* NAVEGAÇÃO */}

        <div className="flex mt-6 gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant="secondary">
            <Image src="/scissors.svg" width={16} height={16} alt="tesoura" />
            Cabelo
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src="/mustache.svg" width={16} height={16} alt="barba" />
            Barba
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src="/razor.svg" width={16} height={16} alt="lamina" />
            Acabamento
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image src="/eyebrow.svg" width={16} height={16} alt="sobrancelha" />
            Sobrancelha
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image src="/towel.svg" width={16} height={16} alt="toalha" />
            Massagem
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image src="/shampoo.svg" width={16} height={16} alt="shampoo" />
            Hidratação
          </Button>
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

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">agendamentos</h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Fevereiro</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

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

        {/* FOOTER */}

        <footer>
          <Card>
            <CardContent className="px-5 py-6">
              <p className="text-sm text-gray-400">
                © 2023 Copyright<span className="font-bold"> FSW Barber</span>
              </p>
            </CardContent>
          </Card>
        </footer>
      </div>
    </div >
  )
}

export default page