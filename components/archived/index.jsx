import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { friends } from "../contacts";
import ContactItem from "../contacts/contactItem";

import React from "react";

const Archived = () => {
  return (
    <Accordion sx={{ background: "transparent", color: "#eee" , boxShadow:"none" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fill: "#eee" }} />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography fontWeight={"600"}>Archived</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {friends.map((person) => {
          if (person.archived) {
            return (
              <ContactItem
                name={person.name}
                userImage={person.picture}
                date={person.latest_timestamp}
                lastMessage={person.lastChat}
                messagesNumber={person.lastChat.length}
              />
            );
          }
        })}
      </AccordionDetails>
    </Accordion>
  );
};

export default Archived;
