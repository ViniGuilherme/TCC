import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router";
import { toast, Toaster } from "sonner";
import { useAuthInit } from "./hooks/use-auth-init";
import { SignInPage } from "./pages/auth/sign-in/page";
import { Home } from "./pages/home";
import { AxiosError } from "axios";
import SignUpPage from "./pages/auth/sign-up/page";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
        mutations: {
            onError: (error) => {
                if (error instanceof AxiosError) {
                    toast.error(error.response?.data?.message || "Erro ao fazer login");
                }
            }
        }
    },

})

export default function App() {

    // Initialize authentication state
    useAuthInit();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path='/entrar' element={<SignInPage />} />
                        <Route path='/cadastrar' element={<SignUpPage />} />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
            <Toaster />
        </>
    );
}
