
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CalendarPage from "./pages/CalendarPage";
import AdminCalendarPage from "./pages/AdminCalendarPage";
import SpeakerPage from "./pages/SpeakerPage";
import NotFound from "./pages/NotFound";
import WelcomeModal from "@/components/ui/WelcomeModal";
import { useEffect } from "react";

const queryClient = new QueryClient();

const NotFoundWithNoIndex = () => {
  useEffect(() => {
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, follow";
    document.head.appendChild(robots);

    const status = document.createElement("meta");
    status.name = "prerender-status-code";
    status.content = "404";
    document.head.appendChild(status);

    return () => {
      document.head.removeChild(robots);
      document.head.removeChild(status);
    };
  }, []);

  return <NotFound />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WelcomeModal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/admin/calendar" element={<AdminCalendarPage />} />
          <Route path="/o-spikere" element={<SpeakerPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFoundWithNoIndex />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;