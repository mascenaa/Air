import LandingHeader from "@/components/header/header"

import Image from 'next/image'
import Aviao from '../../../public/aviao.svg'
import Aviao2 from '../../../public/aviao3.svg'

import Eshley from '../../../public/time/Eshley.jpeg'
import FelipeL from '../../../public/time/Lira.jpeg'
import FelipeM from '../../../public/time/Mura.jpeg'
import JoaoP from '../../../public/time/joao.jpeg'
import Marty from '../../../public/time/Marty.jpeg'
import Pietro from '../../../public/time/Pietro.jpeg'

import img_simpl from '../../../public/icones/simplificar.png'
import img_pers from '../../../public/icones/personalizar.png'
import img_viagem from '../../../public/icones/viagem.png'

import img_custom from '../../../public/icones/customizar2.png'
import img_pers2 from '../../../public/icones/personalize2.png'
import img_res from '../../../public/icones/reserva3.png'

export default function AboutPage() {
    return (
        <div>
            <LandingHeader></LandingHeader>
            <div className="image-about relative overflow-hidden">

                <Image
                    src={Aviao}
                    width={1300}
                    height={1300}
                    alt="Picture of airplane"
                />

                {/* <div className="absolute w-1300 h-1300 px-10 py-10 top-0 right-0 text-center text-blue-900 text-5xl leading-4 flex flex-col items-end font-bold">ABOUT AIR.</div> */}

            </div>

            <div className="section-one-about text-center p-10">

                <h1 className="title-about text-center font-extrabold text-2xl">ABOUT US</h1>

                <p className="paragraph-about text-center mt-10 px-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, cum libero labore nemo quas voluptas distinctio aliquam, temporibus ad vitae, ipsa pariatur tempora accusamus cumque officia quis perspiciatis. Blanditiis, esse.</p>

            </div>

            <div className="section-goals text-center bg-blue-950 text-white py-10">
                <h2 className="title-goals text-center  text-xl font-bold mb-12">What are our goals?</h2>

                <div className="options-goals text-center flex flex-row justify-evenly m-4">
                    <div className="bit-goals text-center flex flex-col justify-center items-center">
                        <Image
                            src={img_simpl}
                            width={50}
                            height={50}
                            alt="Picture of airplane"
                        />

                        <p className="p-opt-goals text-center text-xs p-4 pt-8 w-80">AIR streamline your flight booking journey with an intuitive and user-friendly platform, providing a hassle-free experience from search to reservation.</p>
                    </div>
                    <div className="bit-goals text-center flex flex-col justify-center items-center">
                        <Image
                            src={img_pers}
                            width={50}
                            height={50}
                            alt="Picture of a mixer"
                        />

                        <p className="p-opt-goals text-center text-xs p-4 pt-8  w-80">AIR offer tailored flight recommendations to match your individual preferences, ensuring each trip is unique and tailored to your specific needs.</p>
                    </div>
                    <div className="bit-goals text-center flex flex-col justify-center items-center">
                        <Image
                            src={img_viagem}
                            width={50}
                            height={50}
                            alt="Picture of a bagpack"
                        />

                        <p className="p-opt-goals text-center text-xs p-4 pt-8  w-80">
                            AIR offers accessible flight booking with diverse options, competitive prices, and convenient features for a satisfying experience.</p>
                    </div>
                </div>
            </div>

            <div className="about-image-break">
                <Image
                    src={Aviao2}
                    width={1300}
                    height={1300}
                    alt="Picture of airplane"
                />
            </div>

            <div className="section-different text-center bg-[#FE9959] text-white py-10">
                <h2 className="title-goals text-center  text-xl font-bold mb-12">What makes us different?</h2>

                <div className="options-goals text-center flex flex-row justify-evenly m-4">
                    <div className="bit-goals text-center flex flex-col justify-center items-center">
                        {<Image
                            src={img_custom}
                            width={50}
                            height={50}
                            alt="Picture of money"
                        />}

                        <p className="p-opt-goals text-center text-xs p-4 pt-8 w-80">We use cutting-edge technology to offer you the best deals on the market, with no hidden fees
                        </p>
                    </div>
                    <div className="bit-goals text-center flex flex-col justify-center items-center">
                        {<Image
                            src={img_pers2}
                            width={50}
                            height={50}
                            alt="Picture of airplane"
                        />}

                        <p className="p-opt-goals text-center text-xs p-4 pt-8 w-80">Filter by flexible dates, layovers, airlines, and more to find the perfect flight for you.</p>
                    </div>
                    <div className="bit-goals text-center flex flex-col justify-center items-center">
                        {<Image
                            src={img_res}
                            width={50}
                            height={50}
                            alt="Picture of reserva"
                        />}

                        <p className="p-opt-goals text-center text-xs p-4 pt-8 w-80">Our intuitive and user-friendly interface makes booking flights easier than ever</p>
                    </div>
                </div>
            </div>

            <div className="section-team flex flex-col justify-center items-center">

                <div className="limitador-team flex flex-row items-start">

                    <div className="integrante-um flex justify-center items-center flex-col m-10">
                        <Image className="rounded-full m-1"
                            src={Eshley}
                            width={90}
                            height={90}
                            alt="Eshley Maria Silva"
                        />
                        <p className="name-team text-center text-base p-1">Eshley Maria<br></br>Silva</p>
                        <div className="redes text-sm m-2">
                            <a className="link-rede" href="https://www.linkedin.com/in/eshley-maria-silva-441692265/" target="_blank">
                                <p className="pb-1 text-center hover:font-bold hover:scale-105 transition ease-in-out delay-150">Linkedin</p>
                            </a>
                            <a className="link-rede" href="https://www.instagram.com/eshleymaria/" target="_blank">
                                <p className="pb-1 text-center hover:font-bold hover:scale-105 transition ease-in-out delay-150">Instagram</p>
                            </a>
                        </div>
                    </div>

                    <div className="integrante-um flex justify-center items-center flex-col m-10">
                        <Image className="rounded-full m-1"
                            src={FelipeL}
                            width={90}
                            height={90}
                            alt="Felipe Lira"
                        />
                        <p className="name-team text-center text-base p-1">Felipe Lira<br></br>do Nascimento</p>
                        <div className="redes text-sm m-2">
                            <a className="link-rede" href="https://www.linkedin.com/in/felipe-lira-286704265/" target="_blank">
                                <p className="pb-1 text-center hover:font-bold hover:scale-105 transition ease-in-out delay-150">Linkedin</p>
                            </a>
                            <a className="link-rede" href="https://www.instagram.com/_felipl/" target="_blank">
                                <p className="pb-1 text-center hover:font-bold hover:scale-105 transition ease-in-out delay-150">Instagram</p>
                            </a>
                        </div>
                    </div>

                    <div className="integrante-um flex justify-center items-center flex-col m-10">
                        <Image className="rounded-full m-1"
                            src={FelipeM}
                            width={90}
                            height={90}
                            alt="Felipe Mura"
                        />
                        <p className="name-team text-center text-base p-1">Felipe<br></br>Murakami</p>
                        <div className="redes text-sm m-2">
                            <a className="link-rede" href="https://www.linkedin.com/in/felipe-murakami-979749286/" target="_blank">
                                <p className="pb-1 text-center hover:font-bold hover:scale-105 transition ease-in-out delay-150">Linkedin</p>
                            </a>
                            <a className="link-rede" href="https://www.instagram.com/felipemurakami1/" target="_blank">
                                <p className="pb-1 text-center hover:font-bold hover:scale-105 transition ease-in-out delay-150">Instagram</p>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="limitador-team flex flex-row items-start">

                    <div className="integrante-um flex justify-center items-center flex-col m-10">
                        <Image className="rounded-full m-1"
                            src={JoaoP}
                            width={90}
                            height={90}
                            alt="Joao Pedro Mascena"
                        />
                        <p className="name-team text-center text-base p-1">João Pedro<br></br>Mascena</p>
                        <div className="redes text-sm m-2">
                            <a className="link-rede" href="https://www.linkedin.com/in/mascenaa/" target="_blank">
                                <p className="pb-1 text-center hover:font-bold hover:scale-105 transition ease-in-out delay-150">Linkedin</p>
                            </a>
                            <a className="link-rede" href="https://www.instagram.com/joaomscn/" target="_blank">
                                <p className="pb-1 text-center hover:font-bold hover:scale-105 transition ease-in-out delay-150">Instagram</p>
                            </a>
                        </div>
                    </div>

                    <div className="integrante-um flex justify-center items-center flex-col m-10">
                        <Image className="rounded-full m-1"
                            src={Marty}
                            width={90}
                            height={90}
                            alt="Marty Souza Gomes"
                        />
                        <p className="name-team text-center text-base p-1">Marty Souza<br></br>Gomes</p>
                        <div className="redes text-sm m-2">
                            <a className="link-rede" href="https://www.linkedin.com/in/giovanna-souza-gomes-594b0625a/" target="_blank">
                                <p className="pb-1 text-center hover:font-bold hover:scale-105 transition ease-in-out delay-150">Linkedin</p>
                            </a>
                            <a className="link-rede" href="https://www.instagram.com/_gio_gomes/" target="_blank">
                                <p className="pb-1 text-center hover:font-bold hover:scale-105 transition ease-in-out delay-150">Instagram</p>
                            </a>
                        </div>
                    </div>

                    <div className="integrante-um flex justify-center items-center flex-col m-10">
                        <Image className="rounded-full m-1"
                            src={Pietro}
                            width={90}
                            height={90}
                            alt="Pietro Navarro"
                        />
                        <p className="name-team text-center text-base p-1">Pietro<br></br>Navarro</p>
                        <div className="redes text-sm m-2">
                            <a className="link-rede" href="https://www.linkedin.com/in/pietro-andrade-4053b7265/" target="_blank">
                                <p className="pb-1 text-center hover:font-bold hover:scale-105 transition ease-in-out delay-150">Linkedin</p>
                            </a>
                            <a className="link-rede" href="https://www.instagram.com/pietroandrade._/" target="_blank">
                                <p className="pb-1 text-center hover:font-bold hover:scale-105 transition ease-in-out delay-150">Instagram</p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}