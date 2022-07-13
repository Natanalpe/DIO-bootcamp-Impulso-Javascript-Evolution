import arrowAccess from '../../imgs/arrow_forward.svg';
import {
    Wrapper
} from './style';

function RepositoryItem({ name, linkToRepo, fullName }) {

    return (
        <Wrapper>
            <h2>{name}</h2>
            <a className='repo-link-name' href={linkToRepo} target='_blank' rel="noreferrer">
                {fullName}
            </a>
            <a href={linkToRepo} className='link-btn' target='_blank' rel="noreferrer"><img src={arrowAccess} /></a>
        </Wrapper>
    )
}

export default RepositoryItem;