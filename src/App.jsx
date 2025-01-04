import "./App.css";
import Layout from "./Component/Layout";
import { DarkModeProvider } from "./Context/ContextProvider";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Layout>
          {/* Add your main content here */}
          <div className="rounded-lg bg-white dark:bg-gray-800 shadow p-4">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Dashboard
            </h1>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Welcome to your dashboard
            </p>
          </div>
        </Layout>
      </DarkModeProvider>{" "}
    </>
  );
}

export default App;
