import { NextResponse, type NextRequest } from "next/server";
// import { isValidRequest } from "@sanity/webhook";
import { revalidatePath } from "next/cache";

export const POST = async (req: NextRequest) => {
  // Bad request
  if (req.method !== "POST") {
    return NextResponse.json(
      { error: "Bad Request", message: "Method not allowed" },
      { status: 405 }
    );
  }

  // Unathorized request
  // const secret = process.env.SANITY_REVALIDATE_SECRET as string;
  // if (!isValidRequest(req as any, secret)) {
  //   return NextResponse.json(
  //     { error: "Unathorized Request", message: "Wrong token" },
  //     { status: 401 }
  //   );
  // }

  // Get body content
  const { _type, _id }: { _type: string; _id: string } = await req.json();

  // Validate types
  const types = ["places", "recommendation"];
  if (!types.includes(_type)) {
    return NextResponse.json(
      { error: "Bad Request", message: "Invalid type" },
      { status: 405 }
    );
  }

  // Revalidate places
  if (_type === "places") {
    revalidatePath("/");
    revalidatePath("/cafe&coworking-spaces");
    revalidatePath("/cafe&coworking-spaces/[id]");
  }

  // Revalidate recommendation place
  if (_type === "recommendation") {
    revalidatePath("/");
  }

  return NextResponse.json(
    { message: `Success revalidating type ${_type} with id ${_id}` },
    { status: 200 }
  );
};
