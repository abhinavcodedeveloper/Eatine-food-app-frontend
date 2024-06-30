import { Navigate, Route, Routes } from 'react-router-dom'
import App from './layout/App'
import HomePage from './pages/HomePage'
import Authcallbackpage from './pages/Authcallbackpage'
import ManageRestaurent from './pages/ManageRestaurent'
// import SearchPage from './pages/SearchPage'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<App><HomePage/></App>}/>
        <Route path="/auth-call" element={<Authcallbackpage/>}/>
        <Route path="/rest-profile" element={<App><ManageRestaurent/></App>}/>
        {/* <Route path="/searchpage" element={<App><SearchPage/></App>}/> */}
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default AppRoutes