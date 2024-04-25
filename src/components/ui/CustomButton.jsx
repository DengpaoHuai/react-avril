import styled from "@emotion/styled";

const Button = ({ title, onClick = () => {}, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

const CustomButton = styled(Button)`
  background-color: #f5f5f5;
  border: 1px solid #e2e2e2;
  border-radius: 2.5px;
  padding: 10px;
  width: 100%;
  -webkit-box-shadow: 3px 3px 6px -1px #d9d9d9;
  box-shadow: 3px 3px 6px -1px #d9d9d9;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #e2e2e2;
  }
`;
export default CustomButton;
