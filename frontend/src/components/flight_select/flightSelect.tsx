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
import { CalendarIcon } from "lucide-react";
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
          dateI: "2024-05-10",
          dateV: "2024-05-18",
          currency: "BRL",
          hl: "pt-br",
          adults: 0,
          children: 0,
          children_seat: 0,
          children_lap: 0,
          travel_class: ""
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
          if (typeof window !== "undefined") {
               getAeroportos();
          }
     }, []);

     useEffect(() => {
          if (typeof window !== "undefined") {
               if (searchFrom) {
                    getSearchAeroportoFrom(searchFrom);
               } if (searchTo) {
                    getSearchAeroportoTo(searchTo);
               } else {
                    getAeroportos();
               }
          }
     }, [searchFrom, searchTo]);

     useEffect(() => {
          if (typeof window !== "undefined") {
               console.log(flightInfos);
          }
     }, [flightInfos]);

     async function handleSubmit(e: any) {
          e.preventDefault();

          const response = await fetch("/api/search", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({
                    departure_id: flightInfos.from,
                    arrival_id: flightInfos.to,
                    outbound: flightInfos.dateI,
                    returnDate: flightInfos.dateV,
                    adults: flightInfos.adults,
                    children: flightInfos.children,
                    children_seat: flightInfos.children_seat,
                    children_lap: flightInfos.children_lap,
                    travel_class: flightInfos.travel_class,
               }),
          })
               .then((res) => res.json())
               .then((data) => {
                    sessionStorage.setItem("searchFlights", JSON.stringify(data));
                    console.log(data);
                    window.location.href = "/catalog";
               })


          console.log(flightInfos)
     }



     return (
          <div suppressHydrationWarning={true} className="bg-white flex flex-col text-black w-full mx-auto p-5 rounded-[4px] items-center justify-between">
               <div className="flex flex-row w-full mx-auto rounded-[4px] items-center justify-around p-2">
                    <div className="flex gap-10 w-full">
                         <div className="w-1/2">
                              <h3 className="text-sm font-bold">De</h3>
                              <Select onValueChange={(e) => {
                                   setFlightInfos({ ...flightInfos, from: e })
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
                                                  onChange={(e) => setSearchFrom(e.target.value)} />
                                             {
                                                  aeroportosFrom.length > 0 ?
                                                       aeroportosFrom.map((aeroporto: any) => (
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
                    <div className="flex gap-5 w-full">
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
               </div>
               <div className="flex flex-row w-full mx-auto rounded-[4px] items-center justify-around p-2">
                    <div className="w-full">
                         <h3 className="text-sm font-bold">Classe da cabine</h3>
                         <div className="flex gap-2 items-center">
                              <Select
                                   onValueChange={(e) => {
                                        setFlightInfos({ ...flightInfos, travel_class: e })
                                   }}
                              >
                                   <SelectTrigger className="border-0 w-fit p-0">
                                        <SelectValue className="text-sm" placeholder="Selecione a classe" />
                                   </SelectTrigger>
                                   <SelectContent className="bg-white text-black gap-2 fixed w-64">
                                        <SelectItem value="economy" className="focus:bg-slate-100 w-full transition-all ease-in-out p-0">
                                             <div className="flex flex-col p-2">
                                                  <div className="flex items-center">
                                                       <h4 className="text-xs text-balance">Economy</h4>
                                                  </div>
                                             </div>
                                        </SelectItem>
                                        <SelectItem value="premium_economy" className="focus:bg-slate-100 w-full transition-all ease-in-out p-0">
                                             <div className="flex flex-col p-2">
                                                  <div className="flex items-center">
                                                       <h4 className="text-xs text-balance">Premium Economy</h4>
                                                  </div>
                                             </div>
                                        </SelectItem>
                                        <SelectItem value="business" className="focus:bg-slate-100 w-full transition-all ease-in-out p-0">
                                             <div className="flex flex-col p-2">
                                                  <div className="flex items-center">
                                                       <h4 className="text-xs text-balance">Business</h4>
                                                  </div>
                                             </div>
                                        </SelectItem>
                                        <SelectItem value="first" className="focus:bg-slate-100 w-full transition-all ease-in-out p-0">
                                             <div className="flex flex-col p-2">
                                                  <div className="flex items-center">
                                                       <h4 className="text-xs text-balance">First</h4>
                                                  </div>
                                             </div>
                                        </SelectItem>
                                   </SelectContent>

                              </Select>
                         </div>
                    </div>
                    <div className="w-full">
                         <h3 className="text-sm font-bold">Quantas pessoas</h3>
                         <div className="flex gap-2 items-center">
                              <Drawer>
                                   <DrawerTrigger className="flex items-center gap-3 mt-3">
                                        <div className="bg-amber-400 text-white font-bold px-2 text-md rounded-[2px] ">
                                             +
                                        </div>
                                        <span>{
                                             parseInt(flightInfos.adults) + parseInt(flightInfos.children) + parseInt(flightInfos.children_seat) + parseInt(flightInfos.children_lap)
                                        }</span>
                                   </DrawerTrigger>
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
                                                  <Input className="bg-stone-800 rounded-2xl" value={flightInfos.adults} type="number" placeholder="0" onChange={(e) => {
                                                       setFlightInfos({ ...flightInfos, adults: e.target.value })
                                                  }} />
                                             </div>
                                             <div className="flex items-center gap-5">
                                                  <div className="w-full">
                                                       <h1>Crianças</h1>
                                                       <p className="text-xs">de 2 a 11 anos</p>
                                                  </div>
                                                  <Input className="bg-stone-800 rounded-2xl" value={flightInfos.children} type="number" placeholder="0"
                                                       onChange={(e) => {
                                                            setFlightInfos({ ...flightInfos, children: e.target.value })
                                                       }} />
                                             </div>
                                             <div className="flex items-center gap-5">
                                                  <div className="w-full">
                                                       <h1>Crianças</h1>
                                                       <p className="text-xs">no assento</p>
                                                  </div>
                                                  <Input className="bg-stone-800 rounded-2xl" value={flightInfos.children_seat} type="number" placeholder="0"
                                                       onChange={(e) => {
                                                            setFlightInfos({ ...flightInfos, children_seat: e.target.value })
                                                       }} />
                                             </div>
                                             <div className="flex items-center gap-5">
                                                  <div className="w-full">
                                                       <h1>Crianças</h1>
                                                       <p className="text-xs">no colo</p>
                                                  </div>
                                                  <Input className="bg-stone-800 rounded-2xl" value={flightInfos.children_lap} type="number" placeholder="0"
                                                       onChange={(e) => {
                                                            setFlightInfos({ ...flightInfos, children_lap: e.target.value })
                                                       }}
                                                  />
                                             </div>
                                        </div>

                                        <DrawerFooter className="w-1/2 mx-auto">
                                             <Button className="bg-amber-400 text-white font-bold w-full hover:bg-amber-500 ">Submit</Button>
                                             <DrawerClose>
                                                  <Button variant="outline" className="w-full bg-red-500 border-none hover:bg-red-600">Cancel</Button>
                                             </DrawerClose>
                                        </DrawerFooter>
                                   </DrawerContent>
                              </Drawer>
                         </div>
                    </div>
               </div>
               <Button onClick={(e) => {
                    handleSubmit(e)
               }} className="bg-amber-400 hover:bg-amber-500 w-full mt-5">Ache os tickets</Button>
          </div>
     );
}