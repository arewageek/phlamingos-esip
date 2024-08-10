import { NextRequest, NextResponse } from "next/server";

async function POST(req: NextRequest, res: NextResponse) {
  const response = { status: 200 };

  const formData = req.formData();

  console.log(formData);

  NextResponse.json(response);
}

export default POST;
