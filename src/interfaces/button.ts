export interface IButton {
  size?: "1" | "2" | "3" | "4" | "5" | "6" | "7";
  background?: string;
  hover?: string;
  color?: string;
  border?: string;
  onClick?: () => void;
  text?: string;
}