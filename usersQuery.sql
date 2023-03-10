-- query insert
insert into users(full_name,password,settlement_account,post,phone_number,address,state) VALUES("Alireza Fekri","sdf3",0340,"Admin",939123456,"isfahan","Active")
-- querry hard Delete
Delete from users where id = 1
-- querry soft Delete
update users set state = 'DeActive' WHERE id = 0