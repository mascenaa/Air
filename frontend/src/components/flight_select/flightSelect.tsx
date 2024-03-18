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
          <div className="bg-white flex text-black w-fit gap-10 mx-auto p-5 rounded-lg items-center ">
               <div>
                    <h3>From</h3>
                    <Select>
                         <SelectTrigger className="border-0">
                              <SelectValue placeholder="Selecione sua partida" />
                         </SelectTrigger>
                         <SelectContent className="bg-white text-black">
                              <Input type="text" placeholder="Digite o seu aeroporto favorito"></Input>
                              <SelectItem value="city1" className="">
                                   <ComponentSVGCountry country="BR" />
                                   São Paulo, Brasil - GRU
                              </SelectItem>
                              <SelectItem value="city2" className="">
                                   Roma, Italia - FCO
                              </SelectItem>
                              <SelectItem value="city3" className="">
                                   Paris, França - CDG
                              </SelectItem>
                              <SelectItem value="city4" className="">
                                   New York, EUA - JFK
                              </SelectItem>
                         </SelectContent>
                    </Select>
               </div>
               <div>
                    <h3>To</h3>
                    <Select>
                         <SelectTrigger className="border-0">
                              <SelectValue placeholder="Selecione seu destino" />
                         </SelectTrigger>
                         <SelectContent className="bg-white text-black">
                              <Input type="text" placeholder="Digite o seu aeroporto favorito"></Input>
                              <SelectItem value="city1" className="">
                                   São Paulo, Brasil - GRU
                              </SelectItem>
                              <SelectItem value="city2" className="">
                                   Roma, Italia - FCO
                              </SelectItem>
                              <SelectItem value="city3" className="">
                                   Paris, França - CDG
                              </SelectItem>
                              <SelectItem value="city4" className="">
                                   New York, EUA - JFK
                              </SelectItem>
                         </SelectContent>
                    </Select>
               </div>
               <div className="flex gap-2">
                    <div>
                         <p>De</p>
                         <Popover>
                              <PopoverTrigger asChild>
                                   <Button>
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
                         <p>Até</p>
                         <Popover>
                              <PopoverTrigger asChild>
                                   <Button>
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