import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
    </Routes>
  )
}

export default Router
