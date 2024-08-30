import MainPage from "./components/MainPage";
import { WorkspaceProvider } from "./context/WorkspaceContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});


function App() {
  return (
    <>
      <WorkspaceProvider>
        <QueryClientProvider client={queryClient}>
          <MainPage></MainPage>
        </QueryClientProvider>
      </WorkspaceProvider>
    </>
  );
}

export default App;
