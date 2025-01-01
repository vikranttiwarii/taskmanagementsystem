// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,

  //NY Server URL
  // apiBaseURL: "http://ddms6.mysita.com:4000/api",
  apiBaseURL: "http://localhost:4000/api",
  // template
  apifile_downloadpath: "http://ddms6.mysita.com:4000/api/uploads/template",
  // for copy internal and external
  // buildurl: "http://ddms6.mysita.com:4000",
  buildurl: "http://localhost:4000",
  // Google Doc URL
  gDocBaseURL: "https://docs.google.com/gview?url=%URL%&embedded=true",

  // Libre Office Hash
  libreOfficeHash: "5e2e1b6",
  // Libre Office Editor URL & PORT
  libreOfficeUrl: 'http://ddms6.mysita.com:9980',

  // Editor URL Read File
  viewWOPISRC: "http://localhost:4000/api/view/wopi/files",
  // Editor URL Read and Write file
  writeWOPISRC: "http://localhost:4000/api/wopi/files",

  // Editor URL Read File (Templates)
  viewtempwopisrc: "http://localhost:4000/api/view/tempwopi/files",
  // Editor URL Read and Write file (Templates)
  writetempWOPISRC: "http://localhost:4000/api/tempwopi/files",
  // Editor URL Read File(App)
  viewappwopisrc: "http://localhost:4000/api/view/appwopi/files",

  itemsPerPage: 10,
  pageSize: 10,
  currentPage: 1,
  totalcount: 1,
  setOffset: 1,

  status: {
    // 0 = Pending
    pending: "0",
    // In-Progress
    inprogress: "1",
    // 1=Partially Approved
    partiallyapproved: "2",
    // Approved
    approved: "3",
    // 3=reject
    reject: "4",
    // reassign
    reassign: "5",
    // HOLD
    hold: "6",
  },

  limitarray: [
    {
      value: 10, id: 10
    },
    {
      value: 20, id: 20
    },
    {
      value: 30, id: 30
    },
    {
      value: 40, id: 40
    }
  ]
};