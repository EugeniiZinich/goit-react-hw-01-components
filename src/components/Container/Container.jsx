import PropTypes from 'prop-types';
import css from "./Container.module.css"


export const Container = ({ children }) => {
    return <div className={css.container}>{children}</div>
}

Container.prototype = {
    children: PropTypes.array.isRequired,
}