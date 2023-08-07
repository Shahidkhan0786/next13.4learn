import { NextResponse } from "next/server"

const Middleware = () => {
  console.log("Middleware run")
  return NextResponse.next()
}

export default Middleware