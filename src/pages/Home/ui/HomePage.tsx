import { Header } from "@/widgets/Header";

import { Button } from "@/shared/ui";

const HomePage = () => {
  return (
    <div className="h-screen">
      <Header />
      <main>
        <Button variant="outline">Click me</Button>
      </main>
    </div>
  );
};
export default HomePage;
