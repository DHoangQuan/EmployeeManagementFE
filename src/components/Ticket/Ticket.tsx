import { FC } from "react";

import { COLUMN_TYPE } from "../../types";

interface TicketProps {
  name: string;
  desc: string;
  assign: string;
  type: COLUMN_TYPE;
}

const Ticket: FC<TicketProps> = ({ assign, desc, name, type }) => {
  return (
    <div className="ticket">
      <h3>
        <span>{name}</span>
        <select value={type}>
          <option value={COLUMN_TYPE.BACKLOG}>backlog</option>
          <option value={COLUMN_TYPE.TODO}>to do</option>
          <option value={COLUMN_TYPE.DOING}>doing</option>
          <option value={COLUMN_TYPE.DONE}>done</option>
          <option value={COLUMN_TYPE.CLOSED}>closed</option>
        </select>
      </h3>
      <p>{desc}</p>
      <span>assign: {assign}</span>
    </div>
  );
};

export default Ticket;
