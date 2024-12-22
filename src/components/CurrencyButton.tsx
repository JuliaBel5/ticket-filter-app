import { Button } from "@mantine/core";

interface CurrencyButtonProps {
  currency: string;
  isActive: boolean;
  onClick: () => void;
}

export const CurrencyButton: React.FC<CurrencyButtonProps> = ({
  currency,
  isActive,
  onClick,
}) => {
  return (
    <Button
      variant="light"
      onClick={onClick}
      className={`currency-button ${isActive ? "active" : ""}`}
    >
      {currency}
    </Button>
  );
};
