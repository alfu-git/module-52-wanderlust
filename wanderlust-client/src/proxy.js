import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export default async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log("session :", session);

  if (session) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/add-destination", "/my-bookings", "/destinations/:id"],
};
