import './footer.scss'
import Hat from '../hat/hat';
import Divider from '../divider/divider';

function Footer() {
    return (
        <footer className="footer">
            <Hat footer={true}/>
            <Divider color={true}/>
        </footer>
    )
}

export default Footer;