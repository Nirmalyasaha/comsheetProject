import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import Wraper from "@/layout/wraper/wraper";
import { Provider } from "react-redux";
import { store } from "@/redux-toolkit/store/store";
import styles from "@/styles/login.module.css";



export default function App({Component,pageProps}:AppProps){
    const queryclient=new QueryClient

    return (

        <Wraper>
            <Provider store={store}>
        <QueryClientProvider client={queryclient}>
            <Component {...pageProps}/>
            </QueryClientProvider>
            </Provider>
            </Wraper>


    )
}


