import { UAuthMoralisConnector } from "@uauth/moralis";

// Instantiate your other connectors.
export const injected = {};

export const walletconnect = { provider: "walletconnect" };

UAuthMoralisConnector.setUAuthOptions({
  clientID: process.env.REACT_APP_UNS_CLIENT_ID,
  redirectUri: process.env.REACT_APP_UNS_REDIRECT_URI,
  fallbackIssuer: undefined,

  // Scope must include openid and wallet
  scope: "openid wallet",

  // Injected and walletconnect connectors are required
  connectors: { injected, walletconnect },
});

export const uauth = { connector: UAuthMoralisConnector };

const connectors = {
  uauth,
};

export default connectors;
