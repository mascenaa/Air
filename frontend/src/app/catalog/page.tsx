"use client"
import FlightSelect from "@/components/flight_select/flightSelect";
import LandingHeader from "@/components/header/header";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Baby, PlaneLanding, PlaneTakeoff, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";


export default function Catalog() {
    const data = JSON.parse(sessionStorage.getItem('searchFlights') ?? '')

    if (data.message == undefined) {
        return (
            <div>
                <LandingHeader />
                <h1 className="text-4xl text-center">Flights Result</h1>
                <div className="p-20">
                    <h1 className="text-2xl text-center">Nenhum voo encontrado</h1>
                </div>
            </div>
        )
    }

    const [searchMeta, setSearchMeta] = useState({
        adultos: data.message.search_parameters.adults,
        criancas: data.message.search_parameters.children,
        criancas_colo: data.message.search_parameters.infants_in_seat,
        criancas_lap: data.message.search_parameters.infants_on_lap,

        dataIda: data.message.search_parameters.outbound_date,
        dataVolta: data.message.search_parameters.return_date,
    })

    function minuteToHour(minute: number) {
        const hours = Math.floor(minute / 60);
        const minutes = minute % 60;
        return `${hours}h ${minutes}m`;
    }

    function formatValor(valor: number) {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function formatDate(date: any) {
        const d = new Date(date);
        const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
        const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
    }

    function handleReservar(flight: any) {
        sessionStorage.setItem('selectedFlight', JSON.stringify(flight));
        toast.success('Voo reservado com sucesso');

        setTimeout(() => {
            window.location.href = '/login';
        }, 1500)
    }

    return (
        <div>
            <LandingHeader />

            <h1 className="text-4xl text-center">Flights Result</h1>

            <div className="p-20">
                <div>
                    <h1 className="text-xl font-bold text-stone-800">Melhores voos ({data.message.best_flights.length})</h1>
                    <div className="my-5">
                        <div>

                            {
                                data.message.best_flights.map((flight: any) => {
                                    return (
                                        <Card key={Math.random()} className="w-full bg-stone-950 my-2">
                                            <CardHeader>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-stone-900 rounded-2xl p-2 w-fit">
                                                            <img src={flight.airline_logo} className="w-10 h-10 rounded-full object-fill" alt="logo" />
                                                        </div>
                                                        <div>
                                                            <CardTitle>Detalhes do Voo</CardTitle>
                                                            <p className="text-sm text-stone-300"> Tempo total de voo: {minuteToHour(flight.total_duration)}</p>
                                                            <div>
                                                                <p className="text-sm text-stone-300">Data ida {formatDate(searchMeta.dataIda)} • Data volta {formatDate(searchMeta.dataVolta)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <CardDescription className="font-bold text-right">
                                                        <p className="line-through">{formatValor(flight.price * 1.6)}</p>
                                                        <p>{formatValor(flight.price)}</p>
                                                        <div className="flex flex-end gap-3 mt-2 text-stone-400">
                                                            <div className="flex gap-1 items-center">
                                                                <User className="w-5 h-5" />
                                                                <p>{searchMeta.adultos}</p>
                                                            </div>
                                                            <div className="flex gap-1 items-center">
                                                                <Baby className="w-5 h-5" />
                                                                <p>{searchMeta.criancas + searchMeta.criancas_colo + searchMeta.criancas_lap}</p>
                                                            </div>
                                                        </div>
                                                    </CardDescription>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                {
                                                    flight.flights.map((f: any, i: number) => {
                                                        return (
                                                            <div className="border-l-2 border-l-stone-900 my-2 p-4 " key={i * Math.random()}>
                                                                <h1 className="text-xl font-bold">{f.airline}</h1>
                                                                <p>{f.airplane} • {minuteToHour(f.duration)}</p>
                                                                <p>Classe: {f.travel_class}</p>
                                                                <div>
                                                                    <div className="text-sm ">
                                                                        <div>
                                                                            <p className="flex items-center gap-1 text-stone-300 my-2"><PlaneTakeoff className="w-5 h-5" /> {f.departure_airport.name}</p>
                                                                        </div>
                                                                        <p className="flex items-center gap-1 text-stone-300 my-2"><PlaneLanding className="w-5 h-5" /> {f.arrival_airport.name}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </CardContent>
                                            <CardFooter className="flex flex-col justify-start w-full ">
                                                <div className="text-left my-5 w-full">
                                                    {
                                                        flight.flights.map((f: any, index: number) => {
                                                            return (
                                                                <p key={index}>
                                                                    {f.extensions[index]}
                                                                </p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className="w-full">
                                                    <Button className="w-full bg-amber-400 hover:bg-amber-500 font-bold " onClick={() => handleReservar(flight)}>
                                                        <span>Reservar</span>
                                                    </Button>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-bold text-stone-800">Outros voos ({data.message.other_flights.length})</h1>
                    <div className="my-5">
                        {
                            data.message.other_flights.map((flight: any) => {
                                return (
                                    <Card key={Math.random()} className="w-full bg-stone-950 my-2">
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="bg-stone-900 rounded-2xl p-2 w-fit">
                                                        <img src={flight.airline_logo} className="w-10 h-10 rounded-full object-fill" alt="logo" />
                                                    </div>
                                                    <div>
                                                        <CardTitle>Detalhes do Voo</CardTitle>
                                                        <p className="text-sm text-stone-300"> Tempo total de voo: {minuteToHour(flight.total_duration)}</p>
                                                        <div>
                                                            <p className="text-sm text-stone-300">Data ida {formatDate(searchMeta.dataIda)} • Data volta {formatDate(searchMeta.dataVolta)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <CardDescription className="font-bold text-right">
                                                    <div>
                                                        <p className="line-through">{formatValor(flight.price * 2)}</p>
                                                        <p>{formatValor(flight.price)}</p>
                                                    </div>
                                                    <div className="flex flex-end gap-3 mt-2 text-stone-400">
                                                        <div className="flex gap-1 items-center">
                                                            <User className="w-5 h-5" />
                                                            <p>{searchMeta.adultos}</p>
                                                        </div>
                                                        <div className="flex gap-1 items-center">
                                                            <Baby className="w-5 h-5" />
                                                            <p>{searchMeta.criancas + searchMeta.criancas_colo + searchMeta.criancas_lap}</p>
                                                        </div>
                                                    </div>
                                                </CardDescription>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            {
                                                flight.flights.map((f: any, index: number) => {
                                                    return (
                                                        <div className="border-l-2 border-l-stone-900 my-2 p-4 " key={index * Math.random()}>
                                                            <h1 className="text-xl font-bold">{f.airline}</h1>
                                                            <p>{f.airplane} • {minuteToHour(f.duration)}</p>
                                                            <p>Classe: {f.travel_class}</p>
                                                            <div>
                                                                <div className="text-sm ">
                                                                    <div>
                                                                        <p className="flex items-center gap-1 text-stone-300 my-2"><PlaneTakeoff className="w-5 h-5" /> {f.departure_airport.name}</p>
                                                                    </div>
                                                                    <p className="flex items-center gap-1 text-stone-300 my-2"><PlaneLanding className="w-5 h-5" /> {f.arrival_airport.name}</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </CardContent>
                                        <CardFooter className="flex flex-col justify-start w-full ">
                                            <div className="text-left my-5 w-full">
                                                {
                                                    flight.flights.map((f: any, index: number) => {
                                                        return (
                                                            <p key={index}>
                                                                {f.extensions[index]}
                                                            </p>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="w-full">
                                                <Button className="w-full bg-amber-400 hover:bg-amber-500 font-bold " onClick={() => handleReservar(flight)}>
                                                    <span>Reservar</span>
                                                </Button>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>


            </div>
        </div >
    )
}
