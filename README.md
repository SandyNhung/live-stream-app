# live-stream-app
App create to fetch all streams, and player can live stream themself

**This app uses:**<br/>
***Js framework: Reactjs, Redux-Thunk, Router, React-Form, Portal <br/>
***API: json-server <br/>
***Stream: RTMP NodeMediaServer, OBS, FLV JS. <br/>

**Run the project:** <br/>
-add your google client_id in src/components/GoogleAuth.js <br/>
-cd /client-side -> npm install -> npm start

-cd /api -> run the json-server (json-server -p 3001 -w db.json)  <br/>
-cd /rtmpserver -> run rtmp server (node index.js) 

Reference: Modern React with Redux [2019 Update]- Stephen Grinder
