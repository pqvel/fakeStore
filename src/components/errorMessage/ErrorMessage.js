import './errorMessage.scss'
import errorJpg from '../../assets/error.jpg';

const ErrorMessage = () => {

    return (
        <div className="error-message">
            <img className="error-message__img" src={errorJpg} alt="error"/>
            <p className="error-message__text">
                Something is wrong...<br/>
                Please try again
            </p>
        </div>
    )
}

export default ErrorMessage