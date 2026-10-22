import { whatsappHref } from "@/lib/config";
import { WhatsAppIcon } from "./Icons";

type Props = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  tone?: "dark" | "light";
};

export function WaButton({ children, size = "md", tone = "dark" }: Props) {
  return (
    <a
      className={`btn btn-${size} btn-${tone}`}
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon size={size === "sm" ? 16 : 19} />
      <span>{children}</span>
    </a>
  );
}
