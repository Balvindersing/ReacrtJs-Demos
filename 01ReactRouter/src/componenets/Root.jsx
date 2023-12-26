import { Outlet } from 'react-router-dom'
import MainNevigation from './MainNevigation';
function RootLayOut() {
    return (
        <>
            <MainNevigation />
            <Outlet />
        </>
    )
};
export default RootLayOut;