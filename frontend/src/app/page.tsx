"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LandingHeader from "@/components/header/header";
import Spline from '@splinetool/react-spline';
import FlightSelect from "@/components/flight_select/flightSelect";

export default function Home() {
  return (
    <section>
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

            <div className="h-1/2">
              <Spline
                scene="https://prod.spline.design/O51X8-O4apkus57v/scene.splinecode"
                renderOnDemand={true}
                onBlur={() => {
                  console.log('blur')
                }}
              />
            </div>

            <div style={{ position: 'absolute', top: 15, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: 10 }}></div>
          </div>
        </div>
      </div>
      <div className="h-screen">
        <h1 className="text-3xl font-bold "> New section</h1>
      </div>
    </section>
  );
}
