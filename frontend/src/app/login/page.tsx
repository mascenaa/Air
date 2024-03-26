import LandingHeader from "@/components/header/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
    return (
        <div>
            <LandingHeader />
            <div className="text-center p-10">
                <div>
                    <h1 className="text-3xl font-bold">Login</h1>
                    <p className="text-[#606060] mt-2">Faça login para conferir seus tickets e reservas. Caso não possua um login, <span className="underline hover:cursor-pointer hover:text-slate-500 transition-all ease-in">clique aqui</span></p>
                </div>
                <div>
                    <div className="mx-auto mt-5 w-2/4">
                        <div>
                            <p className="text-left">Email</p>
                            <Input placeholder="Insira seu email" className="bg-white text-black text-sm mt-2" type="email" />
                        </div>
                        <div>
                            <p className="text-left mt-5">Password</p>
                            <Input placeholder="Insira sua senha" className="bg-white text-black text-sm mt-2" type="password" />
                        </div>
                        <p className="text-right text-[#606060] mt-2 text-sm hover:text-slate-500 hover:cursor-pointer transition-all ease-in">Forget Password?</p>
                        <Button className="bg-white font-semibold text-black rounded-md w-full hover:bg-gray-200 mt-5">Login</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}