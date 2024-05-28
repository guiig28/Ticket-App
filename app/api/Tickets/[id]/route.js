import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

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
