import { Outlet } from 'react-router-dom'
import MainNevigation from './MainNevigation';
function RootAdminLayOut() {
    return (
        <>
            <MainNevigation />
            <Outlet />
        </>
    )
}
export default RootAdminLayOut;