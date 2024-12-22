import { Card, Text, Group, Image, Stack, Box } from "@mantine/core";
import getAirlineLogo from "@/utils/getAirlineLogo";
import { IoAirplaneSharp } from "react-icons/io5";
import { CustomButton } from "./CustomButton";
import { TicketItem } from "src/types/ticketItem";
import { formatDate } from "@/utils/formatDate";
import { getStopLabel } from "@/utils/getStopLabel";

export const TicketCard: React.FC<TicketItem> = ({
  origin,
  origin_name,
  destination,
  destination_name,
  departure_date,
  departure_time,
  arrival_date,
  arrival_time,
  carrier,
  stops,
  price,
  currency,
}) => {
  const logo = getAirlineLogo(carrier);

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="card-container"
    >
      <Group gap={"5%"}>
        <Stack justify="flex-start" className="ticket-button">
          {logo && <Image src={logo} alt={`${carrier} logo`} />}
          <CustomButton price={price} currency={currency} />
        </Stack>
        <Stack justify="flex-start" w={"60%"} gap={0} m={0}>
          <Group justify="space-between" align="center" m={0}>
            <Text className="time">{departure_time} </Text>
            <Stack align="center" gap={0}>
              <Text size="sm" c="dimmed">
                {getStopLabel(stops)}
              </Text>
              <Group gap={0} align="center" m={0} className="plane-trace">
                <Box w={"80%"} h={"1px"} bg={"gray"} />
                <IoAirplaneSharp size={"20px"} color="grey" />
              </Group>
            </Stack>
            <Text className="time">{arrival_time} </Text>
          </Group>
          <Group justify="space-between">
            <Text size="md">
              {origin} {origin_name}
            </Text>
            <Text size="md">
              {destination} {destination_name}
            </Text>
          </Group>
          <Group justify="space-between">
            <Text size="sm">{formatDate(departure_date)}</Text>
            <Text size="sm">{formatDate(arrival_date)}</Text>
          </Group>
        </Stack>
      </Group>
    </Card>
  );
};
