import React, {useState} from 'react'
import './styles.css'

const Form = () => {
    interface IForm {
        name: string;
        email: string;
        body: string;
      }
    
      const [form, setFormValue] = useState<IForm>({
        name: "",
        email: "",
        body: ""
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
        console.log("Form Submitted! Values: ", form);
      };
    return  <div className="container">
          <form onSubmit={handelSubmit}>
            <div className="formblock">
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
                value={form.body}
                onChange={e => updateForm("body", e)}
              ></textarea>
            </div>
            <input className="submit" type="submit" value="SUBMIT" />
          </form>
       </div>
  };
  
  export default Form;