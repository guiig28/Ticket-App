import Ticket from "../../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log("post check");
    const body = await req.json();
    const ticketData = body.formData;

    await Ticket.create(ticketData);

    return NextResponse.json(
      { message: "Ticket criado com sucesso" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Erro", err }, { status: 500 });
  }
}
