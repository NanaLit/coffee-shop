import './button.scss';

function Button ({text, color, right, left, filter, onFilterSelect}) {
    const active = filter === text;

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

    if(active) {
        clazz += ' btn_active'
    }

    return (
        <button className={clazz}
            type="button"
            onClick={() => onFilterSelect(text)}>
            {text}
        </button>
    )
}

export default Button;