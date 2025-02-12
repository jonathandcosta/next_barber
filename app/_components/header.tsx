import Image from "next/image"
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 flex flex-row justify-between items-center">
        <Image alt="Barber" src="/logo.png" height={18} width={120} />

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size='icon'
              variant='outline'
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex items-center border-b border-solid gap-3 py-5">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww" />
              </Avatar>

              <div>
                <p className="font-bold">Jonathan Costa</p>
                <p className="text-xs">jddatsoc@gmail.com</p>
              </div>

            </div>

            <div className="flex flex-col gap-4 border-b border-solid py-5">
              <Button className="justify-start gap-2" variant={"ghost"}>
                <HomeIcon size={18} />
                Ínicio
              </Button>
              <Button className="justify-start gap-2" variant="ghost">
                <CalendarIcon size={18} />
                Agendamentos
              </Button>
            </div>


          </SheetContent>
        </Sheet>

      </CardContent>
    </Card>
  );
}

export default Header;