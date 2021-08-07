import React, { useState, useEffect} from "react";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";


const Update = () => {
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  
  
  let history = useHistory();

  useEffect(() => {
    
    
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckbox(localStorage.getItem("Checkbox Value"));
  }, []);

  const updateApidata = () => {
    axios
      .put(`https://610e105d48beae001747ba2e.mockapi.io/crudData/${id}`, {
        firstName,
        lastName,
        checkbox
      })
      .then(() => {
        history.push("/read");
      });
  };

  return (<div>
      <Form>
        <FormField>
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormField>
        <FormField>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormField>
        <FormField>
          <Checkbox
            label="I agree to the Terms and Conditions"
            checked={checkbox}
            onChange={() => setCheckbox(!checkbox)}
          />
        </FormField>
        <Button type="submit" onClick={updateApidata}>
          Update
        </Button>
      </Form>
    </div>
  );
};
export default Update;
