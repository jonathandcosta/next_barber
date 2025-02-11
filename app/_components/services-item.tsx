import { BarbershopService } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface ServiceItemProps {
  service: BarbershopService
}

const ServiceItem = ({ service }: ServiceItemProps) => {

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
            <Button size='sm' variant={"secondary"}>Reservar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ServiceItem;