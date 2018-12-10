import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Header } from './components'

export default function App() {
    return (
        <Router>
            <Header></Header>
        </Router>
    );
}