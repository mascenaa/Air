import LandingHeader from "@/components/header/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
    return (
        <div className="text-center p-10 "> 
            <div>
                <LandingHeader />            
            </div>
            <div>
                <h1 className="text-4xl font-bold p-10">AIR</h1>
            
                <Button className="bg-white font-black text-black rounded-2xl w-1/4 hover:bg-gray-200">Entrar com Gmail</Button>
            </div>
            <div>
            <div className="mx-auto p-10 w-2/4">
                <p className="text-left">Email</p>
                <Input placeholder="" className="bg-white" />
                <p className="text-left">Senha</p>
                <Input placeholder="" className="bg-white"/>
                <p className="text-right ">Esqueceu a senha?</p>
                <Button className="bg-white font-bold text-black rounded-2xl w-full hover:bg-gray-200 mt-10 ">Entrar</Button>
            </div>
            </div>

        </div>
    )
}