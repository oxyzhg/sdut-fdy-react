import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";

const CollegeDesc = props => {
  return (
    <div>
      <Card title={props.college}>
        {props.desc.map((item, index) => <p key={index}>{item}</p>)}
      </Card>
    </div>
  );
};

CollegeDesc.propTypes = {
  college: PropTypes.string,
  desc: PropTypes.array
};

export default CollegeDesc;
