import { styled } from '@mui/material/styles';

export const Logo = styled((props) => {
  const { ...other } = props;

  return (
    <img
      src={"/static/logo.png"}
      width="42"
      height="42"
      xmlns="http://www.w3.org/2000/svg"
      alt={"Logo Library"}
      {...other}/>
  );
})``;

