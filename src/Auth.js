import Cookies from "js-cookie";


const Auth = () => {

const coo = Cookies.get('token');
if(coo){
  return true;
}
else{
  return false;
}
}

export default Auth