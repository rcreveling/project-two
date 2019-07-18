* To run on your _localhost_

1. add the following line to your .env file
    LOCALDB_URL=mysql://root:yourPasswordHere@localhost/localmotion

2. create the database run _./db/schema.sql_

3. If you want to seed the activities table:
    a. change the config file to NOT use the .env file
        "development": {
            "username": "root",
            "password": "yourPasswordHere",
            "host": "localhost",
            "database": "localmotion",
            "dialect": "mysql"
        }

    b. in the terminal, run the following command, from the project's root directory:
        _sequelize db:seed:all_ 

4. None of the other tables have seed data, including Clients