import React from 'react';
 
const Dash = () => {
    return (
    <div>
        <h1>Welcome, Guest</h1>
        <br/>
        <p className="tabletitle">Pending QC / Main.</p>
        <table class="table">
     
  <thead class="thead-dark">
    <tr>
      <th scope="col">Type</th>
      <th scope="col">Worksheet</th>
      <th scope="col">Date</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Instrument 1</td>
      <td>Today</td>
      <td>Incomplete</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Inventory</td>
      <td>Today</td>
      <td>Incomplete</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Daily QC</td>
      <td>Today</td>
      <td>Pending</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mainti.</td>
      <td>Today</td>
      <td>Pending</td>
    </tr>
  </tbody>
</table>
    </div>
    );
}
 
export default Dash;