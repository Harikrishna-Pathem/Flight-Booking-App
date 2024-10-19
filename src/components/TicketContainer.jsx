import Ticket from "./Ticket";

function TicketContainer({ info, tickets }) {
  return (
    <>
      <div className="container">
        <h5 className="text-center">Tickets for One Way</h5>
        {tickets.map((ticket) => (
          <Ticket info={info} ticket={ticket} />
        ))}
      </div>
    </>
  );
}

export default TicketContainer;
