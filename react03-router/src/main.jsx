import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';


/*
라우팅 설정을 위해 최상위 컴포넌트인 App을 BrowserRouter 컴포넌트로 
랩핑한다. 이렇게하면 App 컴포넌트 내에서 라우팅 설정을 할 수 있다.
*/ 
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
