import { HashRouter as Router } from "react-router-dom";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/AppSideBar";
import MainComponent from "@/components/MainComponent";

export default function App() {
  return (
    <Router>
      <SidebarProvider>
        <AppSidebar />
        <MainComponent />
      </SidebarProvider>
    </Router>
  );
}
