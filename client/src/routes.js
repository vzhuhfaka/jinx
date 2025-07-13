import { useRoutes } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'

export default function Router () {
    const Routes = useRoutes([
        {
            path: '/main',
            element: <MainPage />
        }, 
        {
            path: '/login',
            element: <LoginPage />
        }, 
        {
            path: '/register',
            element: <RegisterPage />
        }
    ])

    return Routes
}