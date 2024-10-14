//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import PostsList from './components/PostsList';
import Related from './components/Related';
import SinglePost from './SinglePost';
import ErrorBoundary from './components/ErrorBoundary';


export default function App() {
  return (
    <>
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1'>
          <ErrorBoundary>
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <PostsList />
                    <Related />  
                  </>
                } 
              />
              <Route path="/post/:id" element={<SinglePost />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </Router>
    </>
    )
}


