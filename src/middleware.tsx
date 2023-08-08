import { NextResponse, NextRequest } from "next/server"

const Middleware = (request:NextRequest) => {
  console.log("Middleware run",request.nextUrl.pathname)
  // return NextResponse.next()
  // if(request.nextUrl.pathname !== "/login"){
    return NextResponse.redirect(new URL("/login",request.url))
  // }

}

export const config = {
  // if you want to give multiple path 
  // matcher: ["/about/:path*" , "/blog/:path*"]
  matcher: "/about/:path*"
}
export default Middleware