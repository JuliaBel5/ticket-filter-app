import { useState, useEffect } from "react";
import { Container, Stack, Image, Box } from "@mantine/core";
import { TicketCard } from "./components/TicketCard";
import { Panel } from "./components/Panel";
import ticketsData from "./data/tickets.json";
import { conversionRates } from "./utils/rates";
import { Ticket } from "./types/ticket";
import { fetchConversionRates } from "./service/conversionRatesService";
import { ERROR_MESSAGES } from "./constants/apiConstants";

const App: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [filters, setFilters] = useState<number[]>([]);
  const [exchangeRates, setExchangeRates] =
    useState<Map<string, number>>(conversionRates);
  const [currency, setCurrency] = useState("RUB");

  useEffect(() => {
    const loadData = async () => {
      try {
        setTickets(ticketsData.tickets);
        const rates = await fetchConversionRates();
        setExchangeRates(rates);
      } catch (error) {
        console.error(ERROR_MESSAGES.LOADING_ERROR, error);
      }
    };

    loadData();
  }, []);

  const filteredTickets = tickets
    .filter((ticket) =>
      filters.length > 0 ? filters.includes(ticket.stops) : true
    )
    .map((ticket) => ({
      ...ticket,
      convertedPrice: (
        ticket.price * (exchangeRates.get(currency) ?? 1)
      ).toFixed(2),
    }))
    .sort(
      (a, b) => parseFloat(a.convertedPrice) - parseFloat(b.convertedPrice)
    );

  return (
    <Container w={"100%"}>
      <Stack gap="lg">
        <Image
          src="bigPlane.png"
          alt="Pick your ticket!"
          w={"70px"}
          mx="auto"
        />

        <Box display="flex" w={"100%"} className="app-container">
          <Panel
            setCurrency={setCurrency}
            selectedStops={filters}
            onFilterChange={setFilters}
          />

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
                price={parseFloat(ticket.convertedPrice)}
                currency={currency}
              />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default App;
