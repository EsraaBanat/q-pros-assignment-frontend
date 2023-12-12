import Home from "@/components/Home";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Q-Prof-Assignment",
};

export default function Page() {
  return (
    <div>
      <Home />
    </div>
  );
}
