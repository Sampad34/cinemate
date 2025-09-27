import "./App.css";
import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="w-full shadow-md sticky top-0 z-50 bg-white dark:bg-gray-800">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AllRoutes />
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-100 dark:bg-gray-800 mt-auto border-t border-gray-200 dark:border-gray-700">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
