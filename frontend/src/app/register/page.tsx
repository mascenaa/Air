import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LandingHeader from "@/components/header/header";

export default function Register() {
    return (
        <section>
            <LandingHeader />
            <div text-center p-20>
                <div className="text-center">
                    <h1 className="p-5">FAÇA SEU REGISTRO</h1>
                    <Button className="bg-white font-black text-black rounded-2xl w-1/4 hover:bg-gray-200">Conecte-se com o Gmail</Button>

                    <p className="p-5">Caso já possua conta, <a href="#" style={{ textDecoration: 'underline' }}>clique aqui</a> para logar</p>
                </div>

                <div className="mx-auto p-15 w-2/4">
                    <div className="flex">
                        <div className="w-1/2 mr-5">
                            <p className="text-left">Nome</p>
                            <Input type="text" className="bg-white" />
                        </div>
                        <div className="w-1/2">
                            <p className="text-left">Sobrenome</p>
                            <Input type="text" className="bg-white" />
                        </div>
                    </div>

                    <p className="text-left p-1">E-mail</p>
                    <Input type="email" className="bg-white" />

                    <p className="text-left p-1">Senha</p>
                    <Input type="senha" className="bg-white" />
                    <div className="p-5">
                        <p className="text-sm">*Possui 8 caracteres</p>
                        <p className="text-sm">*Possuir pelo menos um número</p>
                        <p className="text-sm">*Possuir pelo menos uma letra maiúscula</p>
                    </div>
                </div>
                <div className="text-center p-5">
                    <Button className="bg-white  font-black text-black rounded-2xl w-1/4 hover:bg-gray-200">Fazer Registro</Button>
                </div>
            </div>
        </section>
    )
}
