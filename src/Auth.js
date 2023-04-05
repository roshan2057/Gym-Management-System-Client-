import Cookies from "js-cookie";


const Auth = () => {

const coo = Cookies.get('logged');
if(coo){
  return true;
}
else{
  return false;
}
}

export default Auth