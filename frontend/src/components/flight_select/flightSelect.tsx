import { useEffect, useState } from "react";
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


export default function FlightSelect() {

     const [dateIda, setDateIda] = useState<Date>()
     const [dateVolta, setDateVolta] = useState<Date>()

     const [search, setSearch] = useState<string>("")

     const [aeroportos, setAeroportos] = useState([])

     function format(date: Date, format: "full" | "long" | "medium" | "short" | undefined) {
          return new Intl.DateTimeFormat("en-US", {
               dateStyle: format,
          }).format(date);
     }

     useEffect(() => {
          async function getAeroportos() {
               const response = await fetch("http://localhost:8080/api/v1/aeroportos")
               const data = await response.json()
               setAeroportos(data.slice(0, 5))
          }
          getAeroportos()
     }, [])

     useEffect(() => {
          function getSearchAeroporto(
               search: string,
          ) {
               // fetch(`http://localhost:8080/api/v1/aeroportos?search=${search}`)
               //.then((response) => response.json())
               //.then((data) => setAeroportos(data))
          }

          getSearchAeroporto(search)
     }, [search, setAeroportos])

     console.log(aeroportos)

     return (
          <div className="bg-white flex text-black w-fit gap-10 mx-auto p-5 rounded-lg items-center justify-center">
               <div>
                    <h3 className="text-sm font-bold">De</h3>
                    <Select>
                         <SelectTrigger className="border-0 w-fit p-0">
                              <SelectValue className="text-sm" placeholder="Selecione sua partida" />
                         </SelectTrigger>
                         <SelectContent className="bg-white text-black gap-2">
                              <Input type="text" placeholder="Digite o seu aeroporto favorito"></Input>
                              {
                                   aeroportos.map((aeroporto: any) => (
                                        <SelectItem key={aeroporto.id} value={aeroporto.id} className="focus:bg-slate-100 w-full transition-all ease-in-out">
                                             <div className="flex items-center gap-2">
                                                  <ComponentSVGCountry country={aeroporto.pais} />
                                                  <h4>{aeroporto.nome}, {aeroporto.cidade} - {aeroporto.codigoIata}</h4>
                                             </div>
                                        </SelectItem>
                                   ))
                              }
                         </SelectContent>
                    </Select>
               </div>
               <div>
                    <h3 className="text-sm font-bold">Para</h3>
                    <Select>
                         <SelectTrigger className="border-0 p-0">
                              <SelectValue placeholder="Selecione seu destino" />
                         </SelectTrigger>
                         <SelectContent className="bg-white text-black gap-2">
                              <Input type="text" placeholder="Digite o seu aeroporto favorito"></Input>
                              {
                                   aeroportos.map((aeroporto: any) => (
                                        <SelectItem key={aeroporto.id} value={aeroporto.id} className="focus:bg-slate-100 w-full transition-all ease-in-out">
                                             <div className="flex items-center gap-2">
                                                  <ComponentSVGCountry country={aeroporto.pais} />
                                                  <h4>{aeroporto.nome}, {aeroporto.cidade} - {aeroporto.codigoIata}</h4>
                                             </div>
                                        </SelectItem>
                                   ))
                              }
                         </SelectContent>
                    </Select>
               </div>
               <div className="flex gap-5">
                    <div>
                         <p className="text-sm font-bold">De</p>
                         <Popover>
                              <PopoverTrigger asChild>
                                   <Button className="p-0">
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {dateIda ? format(dateIda, "medium") : <span>Pick a date</span>}
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
                    <div>
                         <p className="text-sm font-bold">Até</p>
                         <Popover>
                              <PopoverTrigger asChild>
                                   <Button className="p-0">
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {dateVolta ? format(dateVolta, "medium") : <span>Pick a date</span>}
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
               <Button>Ache os tickets</Button>
          </div>
     );
}