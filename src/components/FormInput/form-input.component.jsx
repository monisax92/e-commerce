import './form-input.styles.scss';

const FormInput = ({label, ...inputOptions}) => {

    return(
    <div className="group">
        <input className="form-input" {...inputOptions}/>
        <label 
            className={`${inputOptions.value.length ? 'shrink' : ''} form-input-label`}
        >
            {label}
        </label> {/* className is for making label shrink if sth if field not empty */}         
    </div>
    );
}

export default FormInput;