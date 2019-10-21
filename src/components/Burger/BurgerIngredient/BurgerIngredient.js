import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const burgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <BreadBottomContainer />;
      break;
    case "bread-top":
      ingredient = (
        <BreadTopContainer>
          <SeedsFirst />
          <SeedsSecond />
        </BreadTopContainer>
      );
      break;
    case "meat":
      ingredient = <MeatContainer />;
      break;
    case "cheese":
      ingredient = <CheeseContainer />;
      break;
    case "salad":
      ingredient = <SaladContainer />;
      break;
    case "bacon":
      ingredient = <BaconContainer />;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default burgerIngredient;

const BreadBottomContainer = styled.div`
  width: 80%;
  height: 13%;
  background: linear-gradient(#f08e4a, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
`;

const BreadTopContainer = styled.div`
  width: 80%;
  height: 20%;
  background: linear-gradient(#bc581e, #e27b36);
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
  position: relative;
`;

const SeedsFirst = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: white;
  left: 30%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(-20deg);
  box-shadow: inset -2px -3px #c9c9c9;

  &:after,
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    border-radius: 40%;
    transform: rotate(60deg);
  }

  &:after {
    left: -170%;
    top: -260%;
    box-shadow: inset -1px 2px #c9c9c9;
  }

  &:before {
    left: 180%;
    top: -50%;
    box-shadow: inset -1px -3px #c9c9c9;
  }
`;

const SeedsSecond = styled(SeedsFirst)`
  left: 64%;
  top: 50%;
  transform: rotate(10deg);
  box-shadow: inset -3px 0 #c9c9c9;

  &:before {
    left: 150%;
    top: -130%;
    transform: rotate(90deg);
    box-shadow: inset 1px 3px #c9c9c9;
  }
`;

const MeatContainer = styled.div`
  width: 80%;
  height: 8%;
  background: linear-gradient(#7f3608, #702e05);
  margin: 2% auto;
  border-radius: 15px;
`;

const CheeseContainer = styled.div`
  width: 90%;
  height: 4.5%;
  background: linear-gradient(#f4d004, #d6bb22);
  margin: 2% auto;
  border-radius: 20px;
`;

const SaladContainer = styled.div`
  width: 85%;
  height: 7%;
  background: linear-gradient(#228c1d, #91ce50);
  margin: 2% auto;
  border-radius: 20px;
`;

const BaconContainer = styled.div`
  width: 80%;
  height: 3%;
  background: linear-gradient(#bf3813, #c45e38);
  margin: 2% auto;
`;
