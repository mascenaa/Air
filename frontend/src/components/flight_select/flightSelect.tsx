import { useState } from "react";
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

     function format(date: Date, format: "full" | "long" | "medium" | "short" | undefined) {
          return new Intl.DateTimeFormat("en-US", {
               dateStyle: format,
          }).format(date);
     }

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
                              <SelectItem value="city1" className="focus:bg-slate-100 w-full transition-all ease-in-out">
                                   <div className="flex items-center gap-2">
                                        <ComponentSVGCountry country="BR" />
                                        <h4>São Paulo, Brasil - GRU</h4>
                                   </div>
                              </SelectItem>
                              <SelectItem value="city2" className="focus:bg-slate-100 w-full transition-all ease-in-out">
                                   <div className="flex items-center gap-2">
                                        <ComponentSVGCountry country="IT" />
                                        <h4>Roma, Italia - FCO</h4>
                                   </div>
                              </SelectItem>
                              <SelectItem value="city3" className="focus:bg-slate-100 w-full transition-all ease-in-out">
                                   <div className="flex items-center gap-2">
                                        <ComponentSVGCountry country="FR" />
                                        <h4>Paris, França - CDG</h4>
                                   </div>
                              </SelectItem>
                              <SelectItem value="city4" className="focus:bg-slate-100 w-full transition-all ease-in-out">
                                   <div className="flex items-center gap-2">
                                        <ComponentSVGCountry country="US" />
                                        <h4>New York, EUA - JFK</h4>
                                   </div>
                              </SelectItem>
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
                              <SelectItem value="city1" className="focus:bg-slate-100 w-full transition-all ease-in-out">
                                   <div className="flex items-center gap-2">
                                        <ComponentSVGCountry country="BR" />
                                        <h4>São Paulo, Brasil - GRU</h4>
                                   </div>
                              </SelectItem>
                              <SelectItem value="city2" className="focus:bg-slate-100 w-full transition-all ease-in-out">
                                   <div className="flex items-center gap-2">
                                        <ComponentSVGCountry country="IT" />
                                        <h4>Roma, Italia - FCO</h4>
                                   </div>
                              </SelectItem>
                              <SelectItem value="city3" className="focus:bg-slate-100 w-full transition-all ease-in-out">
                                   <div className="flex items-center gap-2">
                                        <ComponentSVGCountry country="FR" />
                                        <h4>Paris, França - CDG</h4>
                                   </div>
                              </SelectItem>
                              <SelectItem value="city4" className="focus:bg-slate-100 w-full transition-all ease-in-out">
                                   <div className="flex items-center gap-2">
                                        <ComponentSVGCountry country="US" />
                                        <h4>New York, EUA - JFK</h4>
                                   </div>
                              </SelectItem>
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