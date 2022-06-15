import { UAuthMoralisConnector } from "@uauth/moralis";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { uauth } from "./connectors";

function App() {
  const { isAuthenticated, logout, authenticate } = useMoralis();
  const uauthMoralisConnector = new UAuthMoralisConnector();

  const userLogIn = async () => {
    try {
      let user = await authenticate(uauth);
      let domainDeatils = uauthMoralisConnector.uauth.user()
        
      console.log("DOMAIN NAME: " + (await domainDeatils).sub)
      console.log("OWNER: " + (await domainDeatils).wallet_address)

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const userLogOut = () => logout();

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">UD with Moralis</h1>
        </div>
        <div className="container">
          {isAuthenticated ? (
            <button className="btn lg btn-primary" onClick={userLogOut}>
              Logout
            </button>
          ) : (
            <button className="btn lg btn-primary" onClick={userLogIn}>
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
