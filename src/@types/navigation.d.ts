import { establishment } from "./establishment.d";
/* eslint-disable no-unused-vars */
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: undefined;
      Accessibility: undefined;
      SignUp: undefined;
      RecoverPassword: undefined;
      Home: undefined;
      MotelDetails: establishment;
      MotelSuggestion: undefined;
      Filter: undefined;
    }
  }
}
