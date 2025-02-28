import Sidebar, { Items } from "./components/Sidebar";
import "./App.css";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <main className="flex">
      <Sidebar>{Items()}</Sidebar>
      <Dashboard />
    </main>
  );
}
