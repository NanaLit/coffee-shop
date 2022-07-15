import './descr.scss';

function Description ({text, middle, bold, bigBold}) {

    let clazz;
    middle ? (clazz = "descr descr_center") : (clazz = "descr")

    return (
        <p className={clazz}>
            <span>{bold}</span>{text}<span className="big">{bigBold}</span>
        </p>
    )
}

export default Description;