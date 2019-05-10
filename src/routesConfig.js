import Login from './pages/login/Login'
import Home from './pages/home/Home'

const routesConfig = [
    {
        path: '/login',
        component: Login,
        exact: true
    },
    {
        path: '/home',
        component: Home,
        exact: true
    }
]

export default routesConfig