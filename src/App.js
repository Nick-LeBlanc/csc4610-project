import logo from './logo.svg';
import './styles/App.css';
import {useState, useEffect, useContext } from 'react'
import Login from './Components/Login'
import HomePage from './HomePage'
import AuthContext from './context/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  const {auth} = useContext(AuthContext);

  useEffect(() => {

  },[]);

  if(auth.user_id === -1){
    return <Login></Login>
  }else{
    return (
      <QueryClientProvider client={queryClient}>
      <HomePage/>
      </QueryClientProvider>
    );
  }
}

export default App;
