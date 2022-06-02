import React from 'react'
import ChatItem from "./chatItem";

const Chat = () => {

  const dummyMessages = [
    {
      "name":'Mary',
      "message":"Hi David.",
      "time":"10:00",
      "isMessageSent":false,
    },
    {
      "name":'David',
      "message":"Hi Mary.",
      "time":"10:01",
      "isMessageSent":true,
    },
     {
      "name":'Mary',
      "message":"How are you doing David my love?",
      "time":"10:07",
      "isMessageSent":false,
    },
    {
      "name":'David',
      "message":"I am splendid and yourself my love?",
      "time":"10:07",
      "isMessageSent":true,
    },
    {
      "name":'Mary',
      "message":"I am doing great is the reservation still on my love?",
      "time":"10:07",
      "isMessageSent":false,
    },
    {
      "name":'David',
      "message":"Absolutely!!! I will pick you up tonight 7PM sharp.DBL",
      "time":"10:07",
      "isMessageSent":true,
    },
    {
      "name":'David',
      "message":"FIND US ON APP You received this message because you've registered or accepted our invitation to receive emails from SHEIN, or you've made a purchase from ﻿S﻿H﻿E﻿I﻿N﻿.﻿c﻿o﻿m﻿.﻿ Please note: to stop receiving emails, click on the UNSUBSCRIBE button, and do not directly reply to this email, as this email was generated automatically and thus your unsubscription request will not be processed.Please contact our customer service if you have any questions.1﻿1﻿2 R﻿o﻿b﻿i﻿n﻿s﻿o﻿n R﻿o﻿a﻿d ﻿#﻿0﻿3﻿-0﻿1 R﻿o﻿b﻿i﻿n﻿s﻿o﻿n 1﻿1﻿2 S﻿i﻿n﻿g﻿a﻿p﻿o﻿r﻿e Privacy Policy | Conditions & Terms",
      "time":"10:07",
      "isMessageSent":true,
    },
  ]

  return (
    <div>
      {
        dummyMessages.map((messageContent , index)=>{
          return(
            <ChatItem key={index} message={messageContent.message} name={messageContent.name} time={messageContent.time} isMessageSent={messageContent.isMessageSent} />
          )
        })
      }
    </div>
  )
}

export default Chat