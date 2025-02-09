import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface BarbershoItemProps {
  barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershoItemProps) => {
  return (

    <Card className="min-w-[167px] rounded-2xl">
      <CardContent className="p-0 px-1 pt-1">
        <div className="relative h-[159px] w-full">
          <Image
            alt={barbershop.name}
            fill
            className="object-cover rounded-2xl"
            src={barbershop.imageUrl}
          />
          <Badge
            className="absolute gap-2 text-sm mt-2 ml-2"
            variant={"secondary"}
          >
            <StarIcon
              className="fill-primary text-primary"
              size={12} />
            <p className="text-sm font-semibold">5.0</p>
          </Badge>
        </div>
        <div className="px-1 py-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.adress}</p>
          <Button variant="secondary" className="mt-3 w-full">
            <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarbershopItem;