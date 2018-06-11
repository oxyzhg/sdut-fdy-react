import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";

const { Meta } = Card;

const AvatarCard = props => {
  return (
    <Card
      hoverable
      style={{ width: 240, margin: 10 }}
      cover={<img alt={props.teacher.name} src={props.teacher.avatar} />}
    >
      <Meta title={props.teacher.name} description={props.teacher.type} />
    </Card>
  );
};

AvatarCard.propTypes = {
  teacher: PropTypes.object
};

export default AvatarCard;
