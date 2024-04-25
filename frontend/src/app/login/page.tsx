"use client"
import { useState, useEffect } from "react";
import LandingHeader from "@/components/header/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Login() {
    const [errorMessage, setErrorMessage] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit() {
        fetch('http://ec2-18-234-201-68.compute-1.amazonaws.com:8080/api/v1/user/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 1239123'
            },
            body: JSON.stringify({
                email: email,
                senha: password
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    localStorage.setItem('email', data.email)
                    localStorage.setItem('name', data.nome)
                    localStorage.setItem('id', data.id)
                    localStorage.setItem('passagensFavoritas', data.passagensFavoritas)
                    localStorage.setItem('pontos', data.pontos)
                    window.location.href = '/dashboard/home'
                } else {
                    setErrorMessage('Email ou senha incorretos!')
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setErrorMessage('Algo está errado... Tente novamente!')
            }
            );
    }

    return (
        <div>
            <LandingHeader />
            <div className="text-center p-10">
                <div>
                    <h1 className="text-3xl font-bold">Login</h1>
                    <p className="text-[#606060] mt-2">Faça login para conferir seus tickets e reservas. Caso não possua um login, <Link href='/register' className="underline hover:cursor-pointer hover:text-slate-500 transition-all ease-in">clique aqui</Link></p>
                </div>
                <div>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}>
                        <div className="mx-auto mt-5 w-2/4">
                            <div>
                                <p className="text-left">Email</p>
                                <Input onChange={(e) => setEmail(e.target.value)} placeholder="Insira seu email" className="bg-white text-black text-sm mt-2" type="email" />
                            </div>
                            <div>
                                <p className="text-left mt-5">Password</p>
                                <Input onChange={(e) => setPassword(e.target.value)} placeholder="Insira sua senha" className="bg-white text-black text-sm mt-2" type="password" />
                            </div>
                            <p className="text-right text-[#606060] mt-2 text-sm hover:text-slate-500 hover:cursor-pointer transition-all ease-in">Forget Password?</p>
                            <Button className="bg-white font-semibold text-black rounded-md w-full hover:bg-gray-200 mt-5">Login</Button>
                            <p className="text-red-600 mt-2">
                                {errorMessage}
                            </p>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}