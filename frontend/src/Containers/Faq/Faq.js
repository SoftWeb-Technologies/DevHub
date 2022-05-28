import React from 'react';
import Accordion from 'components/accordion/accordion';
import "./Faq.css";


const faq = [
    {
      title: 'What is DevHub ?',
      contents: (
        <div>
          DevHub is  all-one-software, where we curate all the latest events, quizzes , exciting communities, latest tech updates, developer news , upcoming contests across various platforms all with a personal touch just for you!
        </div>
      ),
    },
    {
      title: 'How to use DevHub: your quick start guide?',
      contents: (
        <div>
          Here you can find an embed video where it shows you how you can use DevHub, A quick start guide! Video embed here
        </div>
      ),
    },
    {
      title: 'How does DevHub cost?',
      contents: (
        <div>
          Click here to checkout the pricing plan. link here
        </div>
      ),
    },
    {
        title: `Can i access a free trial?`,
        contents: (
            <div>
                No, as of today we don't provide a free trial to users.
            </div>
        ),
    },
  ];
    export default function Faq() {
  return (
      //<Container>
      //  <Heading
      //    title="Frequently asked question"
      //    slogan=""
      //  />
       //<Box
       //   sx={{
       //     display: 'flex',
       //     width: ['100%', null, null, '650px', '745px'],
       //     flexDirection: 'column',
       //     mx: 'auto',
       //     my: -4,
       //   }}
       // >
          <Accordion items={faq} />
        //</Box>
      //</Container>
  );
}
