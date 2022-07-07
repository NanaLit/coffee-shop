import './footer.scss'
import Hat from '../hat/hat';

function Footer() {
    return (
        <footer className="footer">
            <Hat footer={true}/>
        </footer>
    )
}

export default Footer;