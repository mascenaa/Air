'use server'
import { cookies } from "next/headers";

async function registerCookie(nameOfCookie: string, value: any) {
     const cookieStore = cookies()
     cookieStore.set({
          name: nameOfCookie,
          value: JSON.stringify(value),
     })
}

function getCookie(nameOfCookie: string) {
     const cookieStore = cookies()
     const cok = cookieStore.get(nameOfCookie)
     return cok
}

export { registerCookie, getCookie }