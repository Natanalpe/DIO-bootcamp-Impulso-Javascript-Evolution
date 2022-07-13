import Header from '../header/index'
import * as S from './style';

function Layout({ children }) {
    return (
        <S.WrapperLayout>
            <Header />
            {children}
        </S.WrapperLayout>
    )
}

export default Layout;