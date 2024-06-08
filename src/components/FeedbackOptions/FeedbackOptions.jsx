import PropTypes from 'prop-types';
import s from '../FeedbackOptions/FeedbackOptions.module.css';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className={s.feedback_container}>
        {Object.keys(options).map(Option => (
            <button
            key={Option}
            type="button"
            name={Option}
            onClick={onLeaveFeedback}
            className={s.feedback_btn}
            >
                {option}
            </button>
        ))}
    </div>
);

FeedbackOptions.PropTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}