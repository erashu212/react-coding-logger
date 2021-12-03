import React from 'react';
import Table from 'react-bootstrap/Table';
import moment from 'moment';

const List = () => {
  return (
    <Table striped bordered hover size="sm" responsive="xl">
      <thead>
        <tr>
          <th>#</th>
          <th>Token Used</th>
          <th>Created At</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody />
    </Table>
  );
};

export default List;
