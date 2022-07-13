import './button.scss';

function Button ({text, color, right, left, id}) {

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
        <button className={clazz}
            type="button">
            {text}
        </button>
    )
}

export default Button;