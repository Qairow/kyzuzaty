import { Envelope } from "@/components/Envelope";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="absolute right-4 top-4 z-30 sm:right-8 sm:top-8">
        <LanguageSwitcher />
      </div>
      <Envelope />
    </div>
  );
}
