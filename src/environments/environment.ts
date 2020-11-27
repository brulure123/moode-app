// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  PandoratBot: {
    host: 'api.pandorabots.com',
    app_id: 'un3292d53e',
    botname: 'moode',
    user_key : 'c4b73e659a5d21ed6e2f26b494d3c244',
    protocol: 'https'
  },
  firebaseConfig: {
    apiKey: 'AIzaSyBl3W5C4SbJcEDNOf3blcxsKuZ_PYovAPY',
    authDomain: 'moode-db.firebaseapp.com',
    databaseURL: 'https://moode-db.firebaseio.com',
    projectId: 'moode-db',
    storageBucket: 'moode-db.appspot.com',
    messagingSenderId: '959094090262',
    appId: '1:959094090262:web:bc5da56bcb884e203ce337',
    measurementId: 'G-17ZGZWJKTQ'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
