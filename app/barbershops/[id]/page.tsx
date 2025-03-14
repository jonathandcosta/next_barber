import Footer from "@/app/_components/footer";
import PhoneItem from "@/app/_components/phone-item";
import ServiceItem from "@/app/_components/services-item";
import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import SidebarSheet from "@/app/_components/sidebar-sheet";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";


interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true
    }
  })

  if (!barbershop) {
    return notFound()
  }
  return (
    <>
      <div className="relative w-full h-[250px]">
        <Image
          className="object-cover"
          fill
          alt={barbershop.name}
          src={barbershop?.imageUrl}
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href='/' >
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button size='icon' variant='outline' className="absolute right-4 top-4" >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </div>

      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>
        <div className="flex items-center gap-2">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p>4,8 (899 avaliações)</p>
        </div>
      </div>

      <div className="border-b border-solid p-5 space-y-2">
        <h2 className="text-xs font-bold uppercase text-gray-400" >sobre nós</h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>

      <div className="border-b border-solid p-5 space-y-3">
        <h2 className="uppercase text-gray-400 font-bold text-xs mb-3">serviços</h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem key={service.id} barbershop={barbershop} service={service} />
          ))}
        </div>
      </div>

      <div className="p-5">
        <h2 className="uppercase text-gray-400 font-bold text-xs mb-3">contato</h2>
        <div className="space-y-3">
          {barbershop.phones.map((phone) => (
            <PhoneItem key={phone} phone={phone} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BarbershopPage;