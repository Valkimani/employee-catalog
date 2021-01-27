import React from 'react';

const Table = () => {
    return (
        // added table stripped in the class for color contrast in the table//
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">2NNaN6379754621</th>
            <td><img src="https://randomuser.me/api/portraits/thumb/women/44.jpg"></img></td>
            <td>Solene Marchand</td>
            <td>solene.marchand@example.com</td>
            <td>S5-69-23-75-36</td>
            <td>S1968-10-21T03:51:09.544Z</td>
          </tr>
          
        </tbody>
      </table>
    );
};

export default Table;