import './button.scss';

function Button ({text, color, right, left}) {

    let clazz = "btn"
    if (color) {
        clazz += " btn_black"
    }

    if (right) {
        clazz += " btn_right"
    }

    if (left) {
        clazz += " btn_left"
    }

    return (
        <button className={clazz}>
            {text}
        </button>
    )
}

export default Button;