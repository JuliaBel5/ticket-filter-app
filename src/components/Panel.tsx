import { getStopLabel } from "@/utils/getStopLabel";
import { Checkbox, Stack, Title, Group, Text, Paper } from "@mantine/core";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { CurrencyButton } from "./CurrencyButton";

interface PanelProps {
  selectedStops: number[];
  setCurrency: Dispatch<SetStateAction<string>>;
  onFilterChange: (stops: number[]) => void;
}

export const Panel: React.FC<PanelProps> = ({
  setCurrency,
  selectedStops,
  onFilterChange,
}) => {
  const [activeCurrency, setActiveCurrency] = useState("RUB");
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = (stop: number, checked: boolean) => {
    if (checked) {
      onFilterChange([...selectedStops, stop]);
    } else {
      onFilterChange(selectedStops.filter((s) => s !== stop));
    }
  };

  const handleSelectAllChange = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      onFilterChange([0, 1, 2, 3]);
    } else {
      onFilterChange([]);
    }
  };

  const handleCurrencyClick = (currency: string) => {
    setActiveCurrency(currency);
    setCurrency(currency);
  };

  return (
    <Paper
      w={"300px"}
      h={"400px"}
      shadow="sm"
      radius="md"
      withBorder
      style={{ backgroundColor: "white" }}
    >
      <Group justify="center" my="lg" gap={0} w="100%">
        {["RUB", "USD", "EUR"].map((currency) => (
          <CurrencyButton
            key={currency}
            currency={currency}
            isActive={currency === activeCurrency}
            onClick={() => handleCurrencyClick(currency)}
          />
        ))}
      </Group>

      <Title order={3} mx="md" mb="md" size="h5">
        КОЛИЧЕСТВО ПЕРЕСАДОК
      </Title>

      <Stack gap={0}>
        <Checkbox
          label="Все"
          size="lg"
          variant="outline"
          indeterminate={selectedStops.length > 0 && selectedStops.length < 4}
          checked={selectAll}
          onChange={(event) =>
            handleSelectAllChange(event.currentTarget.checked)
          }
          className="panel-checkbox"
        />

        {[0, 1, 2, 3].map((stop) => (
          <Group key={stop} justify="space-between" className="panel-checkbox">
            <Checkbox
              size="lg"
              variant="outline"
              checked={selectedStops.includes(stop)}
              label={getStopLabel(stop)}
              onChange={(event) =>
                handleCheckboxChange(stop, event.currentTarget.checked)
              }
              style={{ display: "flex", alignItems: "center" }}
            />

            {stop === 0 && (
              <Text
                size="xs"
                c="blue"
                style={{ cursor: "pointer", userSelect: "none" }}
                onClick={() => onFilterChange([0])}
              >
                ТОЛЬКО
              </Text>
            )}
          </Group>
        ))}
      </Stack>
    </Paper>
  );
};
