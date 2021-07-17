import React from "react";
import styled from "styled-components";
import Arrow from "./icons/Arrow";
import LinkLocation from "./navigation/LinkLocation";

 const StyledDiv = styled.div`
  margin: .1rem;
  padding: .1rem;
`;
export const Header = (props) => {
  return (
    <div className="ui top blue inverted attached menu">
      <span className="item link" onClick={props.onToggleMenu}>
        <Arrow />
      </span>
      <div className="ui breadcrumb item white">
        <StyledDiv>
          <LinkLocation />
        </StyledDiv>
      </div>
      <div className="item white"><a href="https://reactjs.org/docs/getting-started.html">Learn React.JS</a></div>
    </div>
  );
};

export default Header;
