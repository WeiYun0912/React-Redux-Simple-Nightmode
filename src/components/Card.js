import { useSelector } from "react-redux";
import { StyledCard } from "./styled/Card.styled";

const Card = ({ item: { id, title, body, image } }) => {
  const darkmode = useSelector((state) => state.theme.darkmode);
  return (
    <StyledCard
      layout={id % 2 === 0 && "row-reverse"}
      bg={!darkmode ? "#fff" : "#344144"}
      color={!darkmode ? "#000" : "#fff"}
    >
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
};

export default Card;
