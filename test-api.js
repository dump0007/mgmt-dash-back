const axios = require('axios');
(async () => {
   const {data} = await axios.post('http://localhost:3000/api/auth/login', {email: 'admin@mgmt.com', password: 'admin123'});
   const t = data.access_token;
   try { await axios.get('http://localhost:3000/api/users', {headers:{Authorization: 'Bearer '+t}}); console.log('users ok'); } catch(e){console.log('users err', e.response?.data)}
   try { await axios.get('http://localhost:3000/api/projects', {headers:{Authorization: 'Bearer '+t}}); console.log('projects ok'); } catch(e){console.log('projects err', e.response?.data)}
   try { await axios.get('http://localhost:3000/api/tasks/all', {headers:{Authorization: 'Bearer '+t}}); console.log('tasks ok'); } catch(e){console.log('tasks err', e.response?.data)}
})();
