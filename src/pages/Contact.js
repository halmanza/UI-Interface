import React from "react";
import { Icon } from "semantic-ui-react";

const Contact = () => {
  return (
    <>
      <div className="ui horizontal list">
        <a href="https://aalmanza.dev" target="_blank" className="item">
          <Icon name="chess rock" size="huge"/>
          aalmanz.dev
        </a>
        <li className="item">
            <Icon name="envelope square" size="huge" />
            anthonya771@gmail.com
        </li>
        
      </div>
    </>
  );
};

export default Contact;
