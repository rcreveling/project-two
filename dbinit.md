* To run on your _localhost_

1. add the following line to your .env file
    LOCALDB_URL=mysql://[yourUserId]:[yourPassword]@localhost/localmotion

2. create the database as shown in _./db/schema.sql_

3. If you want to seed the activities table:
    a. change the config file to NOT use the .env file
        "development": {
            "username": "[yourUserId]",
            "password": "[yourPassword]",
            "host": "localhost",
            "database": "localmotion",
            "dialect": "mysql"
        }

    b. in the terminal, run the following command, from the project's root directory:
        _sequelize db:seed:all_ 

    NOTE: make sure the npm package _sequelize-cli_ is installed

4. None of the other tables have seed data, including Clients. Create new Clients using the application.