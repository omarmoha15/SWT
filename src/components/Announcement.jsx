import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: gray;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Stop your hunger and order now</Container>;
};

export default Announcement;
