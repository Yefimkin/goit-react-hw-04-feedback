import PropTypes from 'prop-types';
import styles from './Feedback.module.css'

const Feedback = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={styles.buttonList}>
            {options.map(option => (
            <li key={option} className={styles.buttonListItems}>
                <button
                    type="button"
                    name={option}
                    onClick={onLeaveFeedback}
                    className={styles.buttonListBtn}>
                {option}
                </button>
            </li>
            ))}
        </ul>
    );
};

Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;