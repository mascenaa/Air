


export default function LandingHeader() {
     return (
          <section className="flex items-center justify-between p-10 text-white">
               <div>
                    <h1 className="text-3xl font-bold">Air</h1>
                    <p className="text-stone-600">
                         The best flight for you
                    </p>
               </div>
               <div>
                    <ul className="flex gap-5 font-bold text-sm">
                         <li className="hover:scale-[1.05] transition-all ease-in hover:cursor-pointer hover:border-b-[1.5px]">SERVIÇOS</li>
                         <li className="hover:scale-[1.05] transition-all ease-in hover:cursor-pointer hover:border-b-[1.5px]">VOOS</li>
                         <li className="hover:scale-[1.05] transition-all ease-in hover:cursor-pointer hover:border-b-[1.5px]">SOBRE NÓS</li>
                         <li className="hover:scale-[1.05] transition-all ease-in hover:cursor-pointer hover:border-b-[1.5px]">CONTATO</li>
                    </ul>
               </div>
          </section>
     )
}