import { useState, useEffect } from "react";
import { Container, Stack, Image, Box } from "@mantine/core";
import TicketCard from "./components/TicketCard";
import Panel from "./components/Panel";
import ticketsData from "./data/tickets.json";

interface Ticket {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

const App: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [filters, setFilters] = useState<number[]>([]);

  useEffect(() => {
    setTickets(ticketsData.tickets);
  }, []);

  const filteredTickets = tickets
    .filter((ticket) =>
      filters.length > 0 ? filters.includes(ticket.stops) : true
    )
    .sort((a, b) => a.price - b.price);

  return (
    <Container w={"100%"}>
      <Stack gap="lg">
        <Image
          src="bigPlane.png"
          alt="Pick your ticket!"
          w={"70px"}
          mx="auto"
        />

        <Box display="flex" w={"100%"} style={{ gap: "20px" }}>
          <Panel selectedStops={filters} onFilterChange={setFilters} />

          <Stack>
            {filteredTickets.map((ticket, index) => (
              <TicketCard
                key={index}
                origin={ticket.origin}
                origin_name={ticket.origin_name}
                destination={ticket.destination}
                destination_name={ticket.destination_name}
                departure_date={ticket.departure_date}
                departure_time={ticket.departure_time}
                arrival_date={ticket.arrival_date}
                arrival_time={ticket.arrival_time}
                carrier={ticket.carrier}
                stops={ticket.stops}
                price={ticket.price}
              />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default App;
