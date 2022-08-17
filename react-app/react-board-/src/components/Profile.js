import { useParams } from 'react-router-dom';

    const data = {
        velopert: {
            name: '황기성',
            description: '피파 도전자',
        },

        sql:{
            
        }
    };

    const Profile = () => {
        const params = useParams();
        const profile = data[params.username];

    return (
        <div>
        <h1>프로필</h1>

        {profile ? (
            <div>
                <h2>{profile.name}</h2>
                <p>{profile.description}</p>
            </div>
        ) : (
            <p>존재 않는 프로필</p>
        )}
        </div>
    );
};

export default Profile;