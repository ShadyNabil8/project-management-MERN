import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./router/router";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeaderProvider from "./context/HeaderContext";
import ThemeProvider from "./context/ThemeContext";

// Make a custom hock for this
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 0,
      gcTime: 0,
      retry: false,
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <HeaderProvider>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router}></RouterProvider>
            </QueryClientProvider>
          </HeaderProvider>
        </AuthProvider>
      </ThemeProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        draggable
        theme="light"
        transition={Slide}
      />
    </>
  );
}

export default App;
