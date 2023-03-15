Galvanize - SDI 15 > API Servers > Cookies: Server > CFU 2
---

Create a repository for this challenge named `cookies-challenge`

Create an Express application that sets a cookie when routed to `/login` with their name. If a cookie is present with a name key, then it says "Welcome {name}!" when the user routes to `/hello`.


## Operate
1. npm install; npm start
1. In browser, nagivate to http://localhost:3000/login?user=[name] (where [name] is your name)
1. In browser, navigate to http://localhost:3000/hello