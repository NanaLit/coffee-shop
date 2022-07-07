import './header.scss';
import Hat from '../hat/hat';

function Header () {
    return (
        <header className="header">
            <Hat footer={false}/>
        </header>
    );
}

export default Header;