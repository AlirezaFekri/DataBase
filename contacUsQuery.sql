-- query insert
INSERT into contact(fullname,attach,title,description,email,state) VALUES("User1","path save","first title","test@gmail.com","test massage","Active")
-- querry hard Delete
Delete from contact where id = 1
-- querry soft Delete
update users set state = 'Deleted' WHERE id = 0