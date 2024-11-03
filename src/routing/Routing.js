import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Header from '../layout/Header'
import Home from '../components/Home'
import PageNotFound from '../components/PageNotFound'
import Footer from '../layout/Footer'

const Routing = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path='' element={<Home />}></Route>
                    <Route path='*' element={<PageNotFound />}></Route>
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default Routing