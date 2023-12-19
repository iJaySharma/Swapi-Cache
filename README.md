# Swapi.dev Cache Engine 
<ul>
<li>This is the Cache engine for high school swapi project 'star wars api' which anyone can access (https://swapi.dev/documentation#root) here </li>
<li>The Documentation have the resources schema details for lots of data from swapi api for corresponding resources and their schema based json response which can have and efficient and effective use case</li> 
<li>Due this Reason i have develop Cache server engine with simplicity for the requested resources to eliminate number of request to api and external loads </li> 
<li>Mention that once data is fetched and stored in the cache, it is available even if the SWAPI is temporarily unavailable.</li> 
<li>the caching engine contributes to a smoother user experience by providing quicker responses, which can be crucial for users who need to access and view Star Wars-related data promptly.</li>  
</ul>

# Setup

```
npm init -y
npm install express axios
```

# Usage 

```
run command node index.js
access http://localhost:3000/<resources>/id
```
