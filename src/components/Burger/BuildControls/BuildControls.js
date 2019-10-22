import React from "react";
import styled from "@emotion/styled";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildsControls = props => (
  <>
    <p style={{ textAlign: "center" }}>
      Total price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    <BuildsControlsWrapper>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          disabled={props.disabled[ctrl.type]}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
        />
      ))}
    </BuildsControlsWrapper>
  </>
);

export default buildsControls;

const BuildsControlsWrapper = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`;
