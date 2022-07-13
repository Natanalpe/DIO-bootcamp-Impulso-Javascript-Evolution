import useGithub from '../../hooks/GithubHooks';
import { 
    Wrapper
} from './style';

function Profile() {

    const { githubState } = useGithub();

    return (
        <Wrapper>
                <img src={githubState.user.avatar} alt='Avatar'/>
                <div className='names'>
                    <h1>{githubState.user.name}</h1>
                    <span><a href={githubState.user.html_url}>{githubState.user.login}</a></span>
                </div>
                <div className='follow'>
                    <div>
                        <h4>Followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                    <div>
                        <h4>Following</h4>
                        <span>{githubState.user.following}</span>
                    </div>
                </div>
                <div className='access-btn'>
                    <a href={githubState.user.html_url} target="_blank" rel="noreferrer">access</a>
                </div>
        </Wrapper>
    )
}

export default Profile;