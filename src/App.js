import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Join from './components/Join'
import Chat from './components/Chat'


 const App = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' exact element={<Join/>}/>
                <Route path='/chat' element={<Chat/>}/>
            </Routes>
           
        </Router>
    </div>
  )
}
export default App;