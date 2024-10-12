import { Outlet } from 'react-router-dom'

function UserProfileLayout() {
    return (
        <div>UserProfileLayout

            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default UserProfileLayout