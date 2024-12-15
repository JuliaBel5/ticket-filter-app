import { Button } from "@mantine/core";

interface CustomButtonProps {
  price: number;
}

export function CustomButton({ price }: CustomButtonProps) {
  return (
    <Button className="custom-button">
      {`Купить`} <br /> {`за ${price}₽`}
    </Button>
  );
}
