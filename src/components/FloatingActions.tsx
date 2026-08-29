import { Phone, MessageCircle } from "lucide-react";
import { business } from "@/lib/business";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={business.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex size-13 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:scale-105 transition-transform"
      >
        <MessageCircle className="size-6" />
      </a>
      <a
        href={business.phoneHref}
        aria-label="Call the studio"
        className="flex size-13 items-center justify-center rounded-full bg-rose text-white shadow-lg shadow-rose/30 hover:scale-105 transition-transform"
      >
        <Phone className="size-6" />
      </a>
    </div>
  );
}
