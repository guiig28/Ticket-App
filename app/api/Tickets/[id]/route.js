import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    const foundTicket = await Ticket.findOne({ _id: id });
    return NextResponse.json({ foundTicket }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Erro", err }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData;
    const updatedTicket = await Ticket.findByIdAndUpdate(id, { ...ticketData });

    return NextResponse.json(
      { message: "Ticket atualizado com sucesso" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Erro", err }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Ticket deletado com sucesso" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Erro", err }, { status: 500 });
  }
}
