import { useParams } from 'react-router-dom';

const data = {
    velopert: {
        name: '황기성',
        description: '목포 앞바다 전설',
    },
    gildong: {
        name: '휑기성',
        description: '목포 앞잡이',
    },
};
const Profile = () => {
    const params = useParams();
    const profile = data[params.username];
    return(
        <div>
            <h1>사용자프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
        </div>
    ) : (
        <p>존재하지 않는 프로필입니다</p>
    )}
    </div>
    );
};
      
export default Profile;