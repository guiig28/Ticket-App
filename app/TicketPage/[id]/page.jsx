import TicketForm from "@/app/(components)/TicketForm";

const TicketPage = ({ params }) => {
  return <>{params.id === "new" ? <TicketForm /> : <div></div>}</>;
};

export default TicketPage;
