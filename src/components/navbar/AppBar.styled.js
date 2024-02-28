import styled from "styled-components"
import {NavLink} from "react-router-dom";

export const StyledLink=styled(NavLink)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  transition: color .5s;
  text-decoration: none;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }

  &.active {
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
  }


`