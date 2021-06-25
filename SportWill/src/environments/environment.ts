// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {    //insieme di tutti gli endpoint della API utilizzati
  production: false,
  getDataUrl:'http://synchost.ns0.it:8080/uscite/',
  sendDataUrl:"http://synchost.ns0.it:8080/uscite/inserisci",
  deleteDataUrl:"http://synchost.ns0.it:8080/uscite/elimina/",
  signInUrl:'http://synchost.ns0.it:8091/signin',
  signUpUrl:'http://synchost.ns0.it:8091/signup',
  userDataUrl:"http://synchost.ns0.it:8091/utenti/all",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
