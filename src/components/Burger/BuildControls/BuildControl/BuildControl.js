import React from "react";
import styled from "@emotion/styled";

const buildsControl = ({ label, added, removed, disabled }) => (
  <BuildsControlWrapper>
    <LabelContainer>{label}</LabelContainer>
    <ControlButton onClick={removed} disabled={disabled} less>
      Less
    </ControlButton>
    <ControlButton onClick={added}>More</ControlButton>
  </BuildsControlWrapper>
);

export default buildsControl;

const BuildsControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

const LabelContainer = styled.div`
  width: 100px;
  text-align: center;
  font-weight: bold;
`;

const ControlButton = styled.button`
  display: block;
  width: 80px;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;
  font: inherit;
  color: white;
  background-color: ${({ less }) => (less ? "#d39952" : "#8f5e1e")};

  &:disabled {
    background-color: grey;
    cursor: inherit;
  }
`;
