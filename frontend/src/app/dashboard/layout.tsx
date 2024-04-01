import React from 'react';
import { cookies } from 'next/headers'

export default async function DashboardLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {

     const cookieStore = cookies()

     const user = cookieStore.get('user')
     console.log(user?.value)

     return (
          <div className="flex">
               <div className="bg-stone-950 p-5 h-screen">
                    <section>
                         <div className="flex items-center justify-between">
                              <h1 className="text-2xl font-bold">AIR</h1>
                              <p className="text-[10px] text-amber-900 bg-amber-400 w-fit p-1 rounded-2xl font-bold">BETA</p>
                         </div>
                         <p className="text-xs text-[#606060]">{

                         }</p>
                         <p className="text-xs text-[#606060]">Pontos: </p>
                    </section>
                    <section className="mt-3">
                         <div>
                              <h3 className="text-lg font-bold text-[#505050]">Principais</h3>
                              <ul className="text-sm ml-2">
                                   <li className="text-slate-300 hover:text-slate-400 hover:cursor-">
                                        Seus tickets
                                   </li>
                                   <li className="text-slate-300 hover:text-slate-400 hover:cursor-">
                                        Favoritos
                                   </li>
                                   <li className="text-slate-300 hover:text-slate-400 hover:cursor-">
                                        Mapa
                                   </li>
                                   <li className="text-slate-300 hover:text-slate-400 hover:cursor-">
                                        Pontos
                                   </li>
                              </ul>
                         </div>
                    </section>
               </div>
               <div className="p-5">
                    {children}
               </div>
          </div >
     )
}