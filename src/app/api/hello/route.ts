import { NextResponse ,NextRequest} from "next/server";

export async function GET(request:NextRequest) {
    console.log("hiiii",request.nextUrl.searchParams.get('name'))

    return NextResponse.json({
        Message:"okkk"
    })
}