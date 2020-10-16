import React from "react";
import PropTypes from 'prop-types';
import {Table, Popconfirm, Button} from "antd";

const ProductList = ({onDelete, products}) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  },{
    title: 'Actions',
    render: (text,record) => {
      return(
        <Popconfirm title=""
      );
    },
  }];
}
