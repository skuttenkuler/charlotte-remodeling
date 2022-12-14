import React, {useState} from 'react'
import Axios from 'axios'
import './styles.css'


const Form = () => {
  interface IForm {
    name: string;
    email: string;
    text: string;
  }
  const api = {
    to:process.env["REACT_APP_TO_EMAIL"],
    from:process.env["REACT_APP_FROM_EMAIL"],
    endpoint:process.env["REACT_APP_API_ENDPOINT"],
  }
  console.log(api)
      const [ error, setError ] = React.useState('');
      const [success,setSuccess] = React.useState('');
      const [form, setFormValue] = useState<IForm>({
        name: "",
        email: "",
        text: ""
      });
    
      const updateForm = (
        formKey: keyof IForm,
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const { value } = event.target;
    
        setFormValue({
          ...form,
          [formKey]: value
        });
      };
      
      const handelSubmit = (e) => {
        
        e.preventDefault();
        Axios.post(api.endpoint,{
          to: api.to,
          subject: form.name,
          email:form.email,
          text:form.text,
          from: api.from
        }).then(() => {
            setFormValue({
              name: "",
              email: "",
              text: ""
            })
            setSuccess('Your email was sent successfully!');
        }).catch(err => {
            console.log('Error in post request by axios',err);
            setSuccess('');
            setError(err.message || 'Unable to send with this email')
        })
          //console.log("Form Submitted! Values: ", form);
        };
    return <form onSubmit={handelSubmit}>
          
            <div className="formblock">
            {error ? <p className="error-message ">{error}</p> : null}
            {success ? <p className="success-message ">{success}</p> : null}
              <input 
                className="formfield"
                type="text"
                id="spacer"
                placeholder="Name.."
                value={form.name}
                onChange={e => updateForm("name", e)}
              />
            </div>
            <div className="formblock">
              <input
                className="formfield"
                type="email"
                placeholder="Email.."
                value={form.email}
                onChange={e => updateForm("email", e)}
              />
            </div>
            <div className="formblock">
              <textarea
                className="formfield"
                type="text"
                placeholder="Description.."
                value={form.text}
                onChange={e => updateForm("text", e)}
              ></textarea>
            </div>
            <input className="submit" type="submit" value="SUBMIT" />
          </form>
  };
  
  export default Form;