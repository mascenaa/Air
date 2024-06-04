import { useEffect, useState, Suspense } from "react";
import {
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Calendar } from "@/components/ui/calendar"
import {
     Popover,
     PopoverContent,
     PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon, Star } from "lucide-react";
import ComponentSVGCountry from "@/lib/select_flag";
import {
     Drawer,
     DrawerClose,
     DrawerContent,
     DrawerDescription,
     DrawerFooter,
     DrawerHeader,
     DrawerTitle,
     DrawerTrigger,
} from "@/components/ui/drawer"


export default function FlightSelect() {

     const [dateIda, setDateIda] = useState<Date>()
     const [dateVolta, setDateVolta] = useState<Date>()
     const [searchFrom, setSearchFrom] = useState<string>("")
     const [searchTo, setSearchTo] = useState<string>("")
     const [aeroportosFrom, setAeroportosFrom] = useState<any>([])
     const [aeroportosTo, setAeroportosTo] = useState<any>([])

     const [flightInfos, setFlightInfos] = useState<any>({
          from: "",
          to: "",
          dateI: dateIda,
          dateV: dateVolta,
          currency: "BRL",
          hl: "pt-br"
     })

     function format(date: Date, format: "full" | "long" | "medium" | "short" | undefined) {
          return new Intl.DateTimeFormat("en-US", {
               dateStyle: format,
          }).format(date);
     }

     async function getAeroportos() {
          const response = await fetch("http://localhost:8080/api/v1/aeroportos")
          const data = await response.json()
          setAeroportosFrom(data.slice(0, 7))
          setAeroportosTo(data.slice(0, 7))
     }

     async function getSearchAeroportoFrom(search: string) {
          await fetch(`http://localhost:8080/api/v1/aeroportos/search/${search}`)
               .then((response) => response.json())
               .then((data: any) => {
                    setAeroportosFrom(data.slice(0, 5));
               })
               .catch((error) => {
                    setAeroportosFrom([]);
               });
     }


     async function getSearchAeroportoTo(search: string) {
          await fetch(`http://localhost:8080/api/v1/aeroportos/search/${search}`)
               .then((response) => response.json())
               .then((data: any) => {
                    setAeroportosTo(data.slice(0, 5));
               })
               .catch((error) => {
                    setAeroportosTo([]);
               });
     }

     useEffect(() => {
          getAeroportos()
     }, [])

     useEffect(() => {
          if (searchFrom.length > 2) {
               getSearchAeroportoFrom(searchFrom)
          }
          else if (searchTo.length > 2) {
               getSearchAeroportoTo(searchTo)
          }
          else {
               getAeroportos()
          }
     }, [searchFrom, searchTo])

     useEffect(() => {
          console.log(flightInfos)
     }, [flightInfos])


     async function handleSubmit(e: any) {
          e.preventDefault();

          console.log(flightInfos)
     }



     return (
          <div suppressHydrationWarning={true} className="bg-white flex flex-col text-black w-full mx-auto p-5 rounded-[4px] items-center justify-between">
               <div className="flex flex-row w-full mx-auto  rounded-[4px] items-center justify-between">
                    <div className="flex gap-10 w-fit ">
                         <div className="w-1/2">
                              <h3 className="text-sm font-bold">De</h3>
                              <Select onValueChange={(e) => {
                                   setFlightInfos({ ...flightInfos, from: e })
                              }}>
                                   <SelectTrigger className="border-0 w-fit p-0">
                                        <SelectValue className="text-sm" placeholder="Selecione sua partida" />
                                   </SelectTrigger>
                                   <SelectContent suppressHydrationWarning={true} className="bg-white text-black gap-2 fixed w-64">
                                        <form onSubmit={(e) => {
                                             e.preventDefault()
                                        }}>
                                             <Input
                                                  type="text"
                                                  placeholder="Digite o seu aeroporto favorito"
                                                  onChange={(e) => setSearchFrom(e.target.value)} />
                                             {

                                                  aeroportosFrom.length > 0 ?
                                                       aeroportosFrom.map((aeroporto: any) => (
                                                            <Suspense key={Math.floor(Math.random() * 43132)} fallback={<div>Loading...</div>}>
                                                                 <SelectItem suppressHydrationWarning={true} key={aeroporto.id} value={aeroporto.codigoIata} className="focus:bg-slate-100 w-full transition-all ease-in-out p-0">
                                                                      <div className="flex flex-col p-2">
                                                                           <div className="flex items-center">
                                                                                <ComponentSVGCountry country={aeroporto.pais} className="w-1/5" />
                                                                                <h4 className="text-xs text-balance text-">{aeroporto.nome} - {aeroporto.codigoIata}</h4>
                                                                           </div>
                                                                      </div>
                                                                 </SelectItem>
                                                            </Suspense>
                                                       )) : (
                                                            <Suspense fallback={<div>Loading...</div>}>
                                                                 <SelectItem suppressHydrationWarning={true} value={'0'} className="focus:bg-slate-100 w-full transition-all ease-in-out">
                                                                      <div className="flex flex-col">
                                                                           <div className="flex items-center gap-2">
                                                                                <h4 className="text-xs text-balance text-">Não encontrado</h4>
                                                                           </div>
                                                                      </div>
                                                                 </SelectItem>
                                                            </Suspense>
                                                       )
                                             }
                                        </form>
                                   </SelectContent>
                              </Select>
                         </div>
                         <div className="w-1/2">
                              <h3 className="text-sm font-bold">Para</h3>
                              <Select onValueChange={(e) => {
                                   setFlightInfos({ ...flightInfos, to: e })
                              }}>
                                   <SelectTrigger className="border-0 w-fit p-0">
                                        <SelectValue className="text-sm" placeholder="Selecione sua partida" />
                                   </SelectTrigger>
                                   <SelectContent className="bg-white text-black gap-2 fixed w-64">
                                        <form onSubmit={(e) => {
                                             e.preventDefault()
                                        }}>
                                             <Input
                                                  type="text"
                                                  placeholder="Digite o seu aeroporto favorito"
                                                  onChange={(e) => setSearchTo(e.target.value)}></Input>
                                             {
                                                  aeroportosTo.length > 0 ?
                                                       aeroportosTo.map((aeroporto: any) => (
                                                            <Suspense key={Math.floor(Math.random() * 43132)} fallback={<div>Loading...</div>}>
                                                                 <SelectItem key={aeroporto.id} value={aeroporto.codigoIata} className="focus:bg-slate-100 w-full transition-all ease-in-out p-0">
                                                                      <div className="flex flex-col p-2">
                                                                           <div className="flex items-center">
                                                                                <ComponentSVGCountry country={aeroporto.pais} className="w-1/5" />
                                                                                <h4 className="text-xs text-balance text-">{aeroporto.nome} - {aeroporto.codigoIata}</h4>
                                                                           </div>
                                                                      </div>
                                                                 </SelectItem>
                                                            </Suspense>
                                                       )) : (
                                                            <Suspense fallback={<div>Loading...</div>}>
                                                                 <SelectItem value={'0'} className="focus:bg-slate-100 w-full transition-all ease-in-out">
                                                                      <div className="flex flex-col">
                                                                           <div className="flex items-center gap-2">
                                                                                <h4 className="text-xs text-balance text-">Não encontrado</h4>
                                                                           </div>
                                                                      </div>
                                                                 </SelectItem>
                                                            </Suspense>

                                                       )
                                             }
                                        </form>
                                   </SelectContent>
                              </Select>
                         </div>
                    </div>
                    <div className="flex gap-5 w-fit">
                         <div className="w-1/2">
                              <p className="text-sm font-bold">De</p>
                              <Popover>
                                   <PopoverTrigger asChild>
                                        <Button className="p-0">
                                             <CalendarIcon className="mr-2 h-4 w-4" />
                                             {dateIda ? format(dateIda, "medium") : <span>Escolha uma data de ida</span>}
                                        </Button>
                                   </PopoverTrigger>
                                   <PopoverContent className="w-auto p-0">
                                        <Calendar
                                             mode="single"
                                             selected={dateIda}
                                             onSelect={setDateIda}
                                             initialFocus
                                             className="bg-white text-black rounded-md"
                                        />
                                   </PopoverContent>
                              </Popover>
                         </div>
                         <div className="w-1/2">
                              <p className="text-sm font-bold">Até</p>
                              <Popover>
                                   <PopoverTrigger asChild>
                                        <Button className="p-0">
                                             <CalendarIcon className="mr-2 h-4 w-4" />
                                             {dateVolta ? format(dateVolta, "medium") : <span>Escolha uma data de volta</span>}
                                        </Button>
                                   </PopoverTrigger>
                                   <PopoverContent className="w-auto p-0">
                                        <Calendar
                                             mode="single"
                                             selected={dateVolta}
                                             onSelect={setDateVolta}
                                             initialFocus
                                             className="bg-white text-black"
                                        />
                                   </PopoverContent>
                              </Popover>
                         </div>
                    </div>
                    <div>
                    </div>
                    <Button onClick={(e) => {
                         handleSubmit(e)
                    }} className="bg-amber-400 hover:bg-amber-500">Ache os tickets</Button>
               </div>
               <div className="flex flex-row w-full mx-auto rounded-[4px] mt-2 gap-10">
                    <div className="w-fit">
                         <h3 className="text-sm font-bold">Quantas pessoas</h3>
                         <div className="flex gap-2 items-center">
                              <Drawer >
                                   <DrawerTrigger className="bg-amber-400 text-white font-bold px-2 text-md rounded-[2px]">+</DrawerTrigger>
                                   <DrawerContent className="bg-stone-950 border-none flex flex-col gap-5">
                                        <DrawerHeader >
                                             <DrawerTitle className="text-center">Quantas pessoas iram na viagem?</DrawerTitle>
                                             <DrawerDescription className="text-center">Lembre-se de adicionar todos os integrantes</DrawerDescription>
                                        </DrawerHeader>
                                        <div className="flex flex-col mx-auto w-1/2 gap-5">
                                             <div className="flex items-center gap-5">
                                                  <div className="w-full">
                                                       <h1>Adultos</h1>
                                                       <p className="text-xs">A partir de 11 anos</p>
                                                  </div>
                                                  <Input className="bg-stone-800 rounded-2xl" type="number" placeholder="0" />
                                             </div>
                                             <div className="flex items-center gap-5">
                                                  <div className="w-full">
                                                       <h1>Crianças</h1>
                                                       <p className="text-xs">de 2 a 11 anos</p>
                                                  </div>
                                                  <Input className="bg-stone-800 rounded-2xl" type="number" placeholder="0" />
                                             </div>
                                             <div className="flex items-center gap-5">
                                                  <div className="w-full">
                                                       <h1>Crianças</h1>
                                                       <p className="text-xs">no assento</p>
                                                  </div>
                                                  <Input className="bg-stone-800 rounded-2xl" type="number" placeholder="0" />
                                             </div>
                                             <div className="flex items-center gap-5">
                                                  <div className="w-full">
                                                       <h1>Crianças</h1>
                                                       <p className="text-xs">no colo</p>
                                                  </div>
                                                  <Input className="bg-stone-800 rounded-2xl" type="number" placeholder="0" />
                                             </div>
                                        </div>

                                        <DrawerFooter className="w-1/2 mx-auto">
                                             <Button className="bg-white text-black w-full hover:bg-slate-300 ">Submit</Button>
                                             <DrawerClose>
                                                  <Button variant="outline" className="w-full">Cancel</Button>
                                             </DrawerClose>
                                        </DrawerFooter>
                                   </DrawerContent>
                              </Drawer>
                              <p>0</p>
                         </div>
                    </div>

               </div>
          </div>
     );
}