import { Button } from "@mantine/core";

interface CustomButtonProps {
  price: number;
  currency: string;
}

export function CustomButton({ price, currency }: CustomButtonProps) {
  return (
    <Button className="custom-button">
      {`Купить`} <br /> {`за ${price} ${currency}`}
    </Button>
  );
}
