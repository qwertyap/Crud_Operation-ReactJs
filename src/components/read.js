import React, { useEffect, useState, useCallback } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
const Read = () => {
  const [apidata, setApidata] = useState([]);

  useEffect(() => {
    axios
      .get(`https://610e105d48beae001747ba2e.mockapi.io/crudData`)
      .then((response) => {
        setApidata(response.data);
      });
  }, []);
  
  
  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };
  const getData = () => {
    axios
      .get(`https://610e105d48beae001747ba2e.mockapi.io/crudData`)
      .then((getData) => {
        setApidata(getData.data);
      });
  };



  const onDelete = (id) => {
    axios
      .delete(`https://610e105d48beae001747ba2e.mockapi.io/crudData/${id}`)
      .then(() => {
        getData();
      });
  };
  // apidata.length ? console.log("nullnot") : console.log("null");
  // console.log(apidata);

  return (
    <>
    { !apidata.length ?<div style={{ textAlign: "center" }}>
          <Link to="/">
            <Button size="large">Create New</Button>
          </Link>
        </div> :
      <div>
        <Table singleLine>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>First Name</TableHeaderCell>
              <TableHeaderCell>Last Name</TableHeaderCell>
              <TableHeaderCell>Checked</TableHeaderCell>
              <TableHeaderCell>Update</TableHeaderCell>
              <TableHeaderCell>Delete</TableHeaderCell>
            </TableRow>
          </TableHeader>
        
          {apidata.map((data) => {
            return (
              <TableBody>
                <TableRow>
                  <TableCell>{data.firstName}</TableCell>
                  <TableCell>{data.lastName}</TableCell>
                  <TableCell>{data.checkbox ? "Checked" : "Unchecked"}</TableCell>
                  <Link to="/update">
                    <TableCell>
                      <Button onClick={() => setData(data)}>Update</Button>
                    </TableCell>
                  </Link>
                  <TableCell>
                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            );
          })}
       
        </Table>
        <div style={{ textAlign: "center" }}>
          <Link to="/">
            <Button size="large">Create New</Button>
          </Link>
        </div>
        </div>}
        </>
  )

    
};

export default Read;
