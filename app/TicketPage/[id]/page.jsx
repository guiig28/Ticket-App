import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/Tickets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Falha ao obter Ticket");
  }

  return res.json();
};

const getTickets = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/Tickets`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Falha ao obter Tickets");
  }

  return res.json();
};

let updateTicketData = {};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  const { tickets } = await getTickets();

  return <TicketForm ticket={updateTicketData} ticketsArray={tickets} />;
};

export default TicketPage;
