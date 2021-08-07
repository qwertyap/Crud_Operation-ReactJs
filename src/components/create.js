import React , { useState } from "react";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from 'react-router';
// import { Link } from "react-router-dom";



const Create = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [checkbox, setCheckbox] = useState(false);

    let history = useHistory();

    const postData = () => {
        axios.post(`https://610e105d48beae001747ba2e.mockapi.io/crudData`, {
            firstName,
            lastName,
            checkbox
        })
            .then(() => {
            history.push("/read")
        })

        
    }
    return (
        <Form>
            <FormField>
                <label>First Name</label>
                <input placeholder="First Name" onChange={(e) => setFirstName(e.target.value) } />
            </FormField>
            <FormField>
                <label>Last Name</label>
                <input placeholder="Last Name" onChange={(e)=> setLastName(e.target.value)} />
            </FormField>
            <FormField>
                <Checkbox label="I agree to the Terms and Conditions" onChange={(e)=> setCheckbox(!checkbox) }/>
            </FormField>
            <Button type="submit" onClick={postData} >Submit</Button>

        </Form>

    );
};

export default Create;
