import { useParams } from 'react-router-dom'
function Profile() {
    const { username } = useParams();
    return (
        <>
            <h1>Profile Page</h1>
            <h3>Welcome {username}</h3>
        </>
    )
}
export default Profile;