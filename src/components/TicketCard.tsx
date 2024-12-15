import { Card, Text, Group, Image, Stack } from "@mantine/core";
import getAirlineLogo from "@/utils/getAirlineLogo";
import { CustomButton } from "./CustomButton";
import { Ticket } from "src/types/ticketType";

const TicketCard: React.FC<Ticket> = ({
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
}) => {
  const logo = getAirlineLogo(carrier);

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder w={"600px"}>
      <Group gap={"5%"}>
        <Stack w={"35%"} justify="flex-start">
          {logo && <Image src={logo} alt={`${carrier} logo`} height={40} />}
          <CustomButton price={price} />
        </Stack>
        <Stack w={"60%"}>
          <Group justify="space-between">
            <Text style={{ fontSize: "34px" }}>{departure_time}</Text>
            <Text size="sm" c="dimmed">
              {stops === 0 ? "Без пересадок" : `${stops} пересадки`}
            </Text>
            <Text style={{ fontSize: "34px" }}>{arrival_time} </Text>
          </Group>
          <Group justify="space-between">
            <Text size="md" mt="md">
              {origin} {origin_name}
            </Text>
            <Text size="md" mt="md">
              {destination} {destination_name}
            </Text>
          </Group>
          <Group justify="space-between">
            <Text size="sm" mt="sm">
              Вылет: {departure_date} в {departure_time}
            </Text>
            <Text size="sm">
              Прибытие: {arrival_date} в {arrival_time}
            </Text>
          </Group>
        </Stack>
      </Group>
    </Card>
  );
};

export default TicketCard;
