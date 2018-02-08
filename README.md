
Build Restful CRUD API for a Student Registration Application using NodeJS-ExpressJS, Mysql.

--------------------------------------------
1. Requirements
--------------------------------------------
- Nodejs : version 8.9.x
- NPM (Node Package Manager) : version 5.6.x
- Mysql : version 5.6.x


--------------------------------------------
2. Steps to Setup
--------------------------------------------

1. Clone the application using git client

 - git clone https://github.com/githubckgoh1439/demo2-nodejs git_demo1

2. Create Mysql database
  - create database [gpnodejs]

3. Change mysql username and password as per your installation
  - open app.js
  - change as per your mysql installation & setup :

		host : '127.0.0.1',
	    user: 'xxxx',
        password : 'xxxx',
        port : 3306, 
        database:'gpnodejs'

4. Build and run the app 
  - Run this cmd script [node app.js]

The app will start running at http://localhost:4300/students/


----------------------------------------------------------------------------------------
3. Learn more : Dockerizing a Spring Boot service which leverages a mysql storage
----------------------------------------------------------------------------------------

Step-1.  
Download this mysql.zip from github then unzip and upload into docker-host-path where : 

- /home/demo1/

	
Step-2. 

Create a [bridge-network] under docker environment using this CLI :
  
   - docker network create -d bridge gp-bridgenet-01

   - As example result like this : 

     root@node03:~# docker network ls

    NETWORK ID          NAME                DRIVER              SCOPE

    f7b898a15847        gp-bridgenet-01     bridge              local


Step-3. 

Download from Dockerhub using below CLI :  

- docker pull dockerckgoh1439/nodejs-demo2:1.0
- docker pull dockerckgoh1439/nodejsmysql-demo2:1.0

- As example result like this : 

  root@node03:~# docker images

  REPOSITORY                          TAG                  IMAGE ID            CREATED             SIZE

  dockerckgoh1439/nodejsmysql-demo2   1.0                  a8e060fa3bf6        3 minutes ago       226MB

  dockerckgoh1439/nodejs-demo2        1.0                  8b9c8fc69788        32 minutes ago      81.9MB


Step-4. 

Download this docker-compose.yml from github and upload into docker-host-path where /home/demo1/ then run below CLI :

 - docker-compose up -d


 - As example result like this : 

   root@node03:~# docker ps

   CONTAINER ID        IMAGE                                                  COMMAND                  CREATED             
   STATUS                    PORTS                    NAMES

   5fb9133d2c7f        dockerckgoh1439/nodejs-demo2:1.0                           "npm start"      39 
   seconds ago      Up 40 seconds             0.0.0.0:4300->4300/tcp   student_dockerhub02

   d54f2c8df3ed        dockerckgoh1439/nodejsmysql-demo2:1.0                     "/entrypoint.sh my..."   43 
   seconds ago      Up 41 seconds (healthy)   0.0.0.0:3306->3306/tcp   mysql_dockerhub02


Step-5. 

Open new browser and go to :

- http://localhost:4300/students/



----------------------------
4. Demo Purpose
----------------------------

Open new browser and go to :

- http://cubemulus.com:8181/students/







