"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LandingHeader from "@/components/header/header";
import Spline from '@splinetool/react-spline';
import FlightSelect from "@/components/flight_select/flightSelect";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"


export default function Home() {

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])



  return (
    <section>
      <div>
      </div>
      <div className="min-h-screen">
        <LandingHeader />
        <div>
          <h1 className="text-4xl text-center w-1/2 mx-auto mt-10 font-normal">
            Looking for the best flight for your trip?
            Choose <span className="font-bold">AIR</span> for an unparalleled experience.
          </h1>
          <div className="scale-95" style={{ position: 'relative' }}>
            <div className="w-full absolute z-[100] top-28">
              <FlightSelect />
            </div>

            <div className="h-fit">
              <Spline
                scene="https://prod.spline.design/O51X8-O4apkus57v/scene.splinecode"
                renderOnDemand={true}
              />
            </div>

            <div style={{ position: 'absolute', top: 15, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: 10 }}></div>
          </div>
        </div>
      </div>
      <div className="h-screen p-10 flex gap-5">
        <div className="flex flex-col w-1/2 justify-center gap-2">
          <h1 className="text-4xl font-bold">Find the best prices <span className="text-blue-700" >quickly</span> and <span className="text-amber-400">easily</span></h1>
          <p className="text-sm text-[#606060]">
            Explore our most popular destinations. From bustling metropolises
            to tropical paradises, we've got the perfect getaway for
            every traveler.
          </p>
          <Button className="bg-white text-black w-full mt-2 rounded-lg hover:bg-gray-200">
            Create your account here
          </Button>
        </div>
        <div className="flex justify-center w-1/2">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="p-10 gap-0">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="w-fit basis-50">
                  <Card className="border-none">
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6 w-fit ">
                      <Image src='https://assets.vogue.in/photos/5ce41cfc4a30b3f5c612bf13/2:3/w_2560%2Cc_limit/Your-ultimate-guide-to-Tokyo-Japan1.jpg' alt="" width={300} height={300} />
                      <div className="flex justify-between w-[300px] mt-2">
                        <span className="text-md font-semibold">Tokyo, Japão</span>
                        <span className="text-md font-semibold">R$ 5.530</span>
                      </div>
                      <p className="w-[300px] text-xs mt-1 text-[#606060]">
                        Discover Tokyo, the vibrant capital of Japan! This fascinating city offers a unique blend of old and new, where ultra-modern skyscrapers meet historic temples.
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
