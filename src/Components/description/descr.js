import './descr.scss';

function Description ({text, middle}) {

    let clazz;
    middle ? (clazz = "descr descr_center") : (clazz = "descr")

    return (
        <p className={clazz}>
            {text}
        </p>
    )
}

export default Description;