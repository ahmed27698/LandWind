import { Route, Routes } from 'react-router'

import Home from "./Home"
import About from './About'
import Contacts from './Contacts'
import P404 from './P404'


export default function Maged() {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<P404 />} />
        </Routes>
    )
}
