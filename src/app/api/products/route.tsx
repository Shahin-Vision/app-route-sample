import { cookies, headers } from "next/headers";

// ✅ GET request handler
export async function GET() {
  const data = [
    { id: 1, title: "T-Shirts" },
  ];

  const cookieList = await cookies();
  const tokenCookie = cookieList.get("authToken");
  console.log("Token Cookie (GET):", tokenCookie);

  return Response.json({ data });
}

// ✅ POST request handler
export async function POST(request: Request) {
  const prod = await request.json();

  const cookieList = await cookies();
  const tokenCookie = cookieList.get("authToken");
  console.log("Token Cookie (POST):", tokenCookie);

  // ✅ must await headers() inside route handlers
  const headerList = await headers();
  console.log("Authorization Header:", headerList.get("Authorization"));

  const data = [
    {
      id: 1,
      title: "T-Shirt",
      prod,
    },
  ];

  return Response.json({ data });
}
