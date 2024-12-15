import {
  Checkbox,
  Stack,
  Title,
  Group,
  Button,
  Text,
  Box,
} from "@mantine/core";

interface PanelProps {
  selectedStops: number[];
  onFilterChange: (stops: number[]) => void;
}

const Panel: React.FC<PanelProps> = ({ selectedStops, onFilterChange }) => {
  const handleCheckboxChange = (stop: number, checked: boolean) => {
    if (checked) {
      onFilterChange([...selectedStops, stop]);
    } else {
      onFilterChange(selectedStops.filter((s) => s !== stop));
    }
  };

  return (
    <Box
      p="md"
      w={"300px"}
      h={"400px"}
      style={{ backgroundColor: "white", borderRadius: 8 }}
    >
      <Group justify="center" mb="lg" gap={0}>
        {["RUB", "USD", "EUR"].map((currency) => (
          <Button
            key={currency}
            variant="light"
            style={{
              borderRadius: 0,
              border: "1px solid #ccc",
              backgroundColor: currency === "USD" ? "#e6f7ff" : "white",
              color: currency === "USD" ? "#1c7ed6" : "#000",
            }}
          >
            {currency}
          </Button>
        ))}
      </Group>

      <Title order={3} mb="xs" size="h5">
        Количество пересадок
      </Title>

      <Stack gap="xs">
        <Checkbox label="Все" disabled indeterminate />

        {[0, 1, 2, 3].map((stop) => (
          <Group key={stop} justify="space-between" align="center">
            <Checkbox
              checked={selectedStops.includes(stop)}
              label={stop === 0 ? "Без пересадок" : `${stop} пересадка`}
              onChange={(event) =>
                handleCheckboxChange(stop, event.currentTarget.checked)
              }
            />

            {stop === 0 && (
              <Text
                size="xs"
                color="blue"
                style={{ cursor: "pointer", userSelect: "none" }}
                onClick={() => onFilterChange([0])}
              >
                ТОЛЬКО
              </Text>
            )}
          </Group>
        ))}
      </Stack>
    </Box>
  );
};

export default Panel;
