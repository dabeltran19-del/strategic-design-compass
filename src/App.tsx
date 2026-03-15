import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LabEnjContext from "./pages/LabEnjContext";
import LabEnjWorkshops from "./pages/LabEnjWorkshops";
import LabEnjHackathon from "./pages/LabEnjHackathon";
import StrategicFacilitation from "./pages/StrategicFacilitation";
import ImpactIndustries from "./pages/ImpactIndustries";
import SamsungChallenge from "./pages/SamsungChallenge";
import SamsungProcess from "./pages/SamsungProcess";
import BusinessDesign from "./pages/BusinessDesign";
import Methodology from "./pages/Methodology";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lab-enj/context" element={<LabEnjContext />} />
          <Route path="/lab-enj/workshops" element={<LabEnjWorkshops />} />
          <Route path="/lab-enj/hackathon" element={<LabEnjHackathon />} />
          <Route path="/facilitation" element={<StrategicFacilitation />} />
          <Route path="/impact" element={<ImpactIndustries />} />
          <Route path="/samsung" element={<SamsungChallenge />} />
          <Route path="/samsung/process" element={<SamsungProcess />} />
          <Route path="/business-design" element={<BusinessDesign />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
