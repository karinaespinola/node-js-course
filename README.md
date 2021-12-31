# SIMPLE CRUD NODE.JS EXPRESS API

Hi! In this repository you will find a simple CRUD API using Node.js and Express. Also username and password for authentication and JWT for authorization, MongoDB as the database. 
**Important Note**: This is code that I wrote following the amazing course by David Gray on YouTube. Here's the link to the course: [YouTube Course](https://www.youtube.com/watch?v=f2EqECiTBL8)


# Installation

 1. After cloning the repository on your computer run the command:

    npm installl

 2. Create .env file in the root folder of your project with the following properties:
 
	ACCESS_TOKEN_SECRET=
	REFRESH_TOKEN_SECRET=
	DATABASE_URI=

Both ACCESS_TOKEN_SECRET and REFRESH_TOKEN_SECRET are any combination of numbers of letters that it will be used by the JWT package to encrypt and decrypt the JWT. On the other hand DATABASE_URI is the URI provided by MongoDB to connect to the database, which you can get creating a free account and creating a database, you will see a "connect" option and you will see a connection string that's the one you will paste in the DATABASE_URI property.

## I hope this repository is helpful to you in any way!

