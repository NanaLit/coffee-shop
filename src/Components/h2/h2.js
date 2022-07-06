import './h2.scss';

function HeaderH2 ({text, weight}) {
    let clazz = 'subheader';
    weight ? (clazz = 'subheader subheader_light') : (clazz = 'subheader');
    return (
        <h2 className={clazz}>
            {text}
        </h2>
    )
}

export default HeaderH2;