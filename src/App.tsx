import { Footer } from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
