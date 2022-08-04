import logo from './logo.svg';
import './App.css';
import Memo from './components/Memo';
import React from 'react';
import Sex from './components/Sex';
import {Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Article from './components/Article';
import Articles from './components/Articles';
import Layout from './Layout';
const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path = "/" element={<Memo />} />
        <Route path = "/sex" element={<Sex />} />
        <Route path = "/profiles/:username" element ={<Profile />} />
      </Route>
      <Route path = "/articles" element ={<Articles />}>
        <Route path = ":id" element ={<Article />} />
      </Route>
    </Routes>
    
  );
};


export default App;