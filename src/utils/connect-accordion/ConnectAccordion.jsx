import "./ConnectAccordion.css"
import items from "./accordion.json"
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const ConnectAccordion = () => {
  return (
    <Accordion allowZeroExpanded>
    {items.map((item) => (
      <AccordionItem key={item.uuid}>
        <AccordionItemHeading>
          <AccordionItemButton >
            {item.heading}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <ul className="bullet-list">
            {item.content.map((contentItem, index) => (
              <li key={index}>{contentItem}</li>
            ))}
          </ul>
        </AccordionItemPanel>
      </AccordionItem>

    ))}
    
  </Accordion>
  )
}

export default ConnectAccordion