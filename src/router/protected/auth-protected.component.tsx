import { IAuthProtectedRouteProps } from './auth-protected'

const AuthProtectedComponent = ({children , layout = 'public'}: IAuthProtectedRouteProps) => {
    switch (layout) {
        case 'public' : 
        return children
    }
}

export default AuthProtectedComponent
