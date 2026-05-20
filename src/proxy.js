import dns from "dns/promises";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { NextResponse } from 'next/server'
import { auth } from "./lib/auth";
import { headers } from "next/headers";
 

export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next();
  
}
 
export const config = {
  matcher: [
    '/all-pets/:id',
    '/all-adoption-requests',
    '/all-adoption-requests/:path*',
    '/dashboard',
    '/dashboard/:path*',
  ]
}