import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Proyecto from "@/pages/Proyecto";
import Analisis from "@/pages/Analisis";
import Simulacion from "@/pages/Simulacion";
import Propuesta from "@/pages/Propuesta";
import Nosotros from "@/pages/Nosotros";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/proyecto" component={Proyecto} />
          <Route path="/analisis" component={Analisis} />
          <Route path="/simulacion" component={Simulacion} />
          <Route path="/propuesta" component={Propuesta} />
          <Route path="/nosotros" component={Nosotros} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
