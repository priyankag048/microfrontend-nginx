[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
# microfrontend-nginx
Implementation of micro-frontend with nginx

# Prerequisites

- MongoDB (https://www.mongodb.com/)
- Node >= 13.11.x and npm >= 6.14.x (https://nodejs.org/en/)
- lerna (https://github.com/lerna/lerna)
- nginx

Start mongoDB and nginx before proceding to next steps.

# Local Setup

1. Clone the git repository using 

    `git clone https://github.com/priyankag048/microfrontend-nginx.git`

2. npm install ( install all dependencies and dev-dependencies )
3. npm run seed ( populate employee and department data in database )
4. npm run build ( build next project)
5. npm startServices ( start employee, department and dashboard services )

    Employee service will start on http://localhost:4001/
    Department service will start on http://localhost:4002/
    Dashboard service will start on http://localhost:4003/

6. npm run startWebServer
    The nginx server will start on http://localhost:4000/
