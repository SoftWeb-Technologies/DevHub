import React from "react";
import { BaseAccordion } from "./BaseAccordion";
import {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  single,
  preventClose,
  combineReducers,
} from "./shared";

export default function Accordion({ items, ...props }) {
  return (
    <BaseAccordion
      stateReducer={combineReducers(single, preventClose)}
      {...props}
    >
      {({ openIndexes, handleItemClick }) => (
        <>
          {items.map((item, index) => (
            <AccordionItem
              key={item.title}
              isOpen={openIndexes.includes(index)}
            >
              <AccordionButton onClick={() => handleItemClick(index)}>
                <span
                  style={{
                    fontSize: "1rem",
                    color: "#0099FF",
                    cursor: "pointer",
                  }}
                  className={openIndexes.includes(index) ? "open" : "closed"}
                >
                  {item.title}
                </span>
              </AccordionButton>
              <AccordionContents isOpen={openIndexes.includes(index)}>
                {item.contents}
              </AccordionContents>
            </AccordionItem>
          ))}
        </>
      )}
    </BaseAccordion>
  );
}
