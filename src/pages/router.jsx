import Home from './home/home';
import { Layout } from '../components/layout/layout';


import {
    createBrowserRouter, createRoutesFromElements, Route,
  } from "react-router-dom";
  
  export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={
          <Layout>
            <Home />
          </Layout>
      } 
      path='/'
      />
    )
  );