import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  const res = await fetch("http://localhost:3000/api/Tickets", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Falha ao obter tickets");
  }

  return res.json();
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, filteredTicketIndex) => (
                    <TicketCard
                      id={filteredTicketIndex}
                      key={filteredTicketIndex}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
