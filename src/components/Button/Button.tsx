import { ButtonElement } from "./Button.style";

interface ButtonProps {
  children: React.ReactNode;
  size?: string;
  variant?: string;
  onClick: () => void;
}

export const Button = ({ children, size, variant, onClick }: ButtonProps) => {
  return (
    <ButtonElement size={size} variant={variant} onClick={onClick}>
      {children}
    </ButtonElement>
  );
};
