// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  apiUrl : "http://localhost:5000",
  roles : [{roleName:'Manager',roleId:1},{roleName:'Team Lead',roleId:2}, {roleName:'Employee',roleId:3}]
};