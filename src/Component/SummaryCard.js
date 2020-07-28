import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SummaryCard(props) {
  const { id, title, text } = props;
  return (
    <Card>
      <Card.Body>
        <Link to={`/${id}`}>
          <Card.Title>{title} </Card.Title>
        </Link>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
