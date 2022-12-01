
create table Users(
	id int primary key auto_increment, 
	username varchar(50) unique not null,
	passwordHash longblob not null,
	paswordSalt longblob not null
);


create table OrderHeaders(
	id int primary key auto_increment,
	deliveryAddress longtext
);


create table OrderLine(
	id int primary key auto_increment,
	quantity int not null
);

create table Pizza(
	id int primary key auto_increment, 
	name varchar(50) not null,
	description longtext not null,
	price float not null,
	rating float,
	picture_link varchar(350),
	category_id int(11) DEFAULT null
);

insert into pizza ( id, name, rating, price, description, category_id, picture_link) values
(1, 'Capricciosa 1', 5, 10.5, 'Description Test 1', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAVJ3XGdLctr-QKNf6bSlVj01XH6nDgtBZA&usqp=CAU'),
(2, 'Veggie', 3, 12.5, 'Description 2',  2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAVJ3XGdLctr-QKNf6bSlVj01XH6nDgtBZA&usqp=CAU'),
(4, 'Margherita', 5, 9.5, 'Description Test ', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAVJ3XGdLctr-QKNf6bSlVj01XH6nDgtBZA&usqp=CAU'),
(5, 'Margherita Test', 5, 10.5, 'Description 5', 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAVJ3XGdLctr-QKNf6bSlVj01XH6nDgtBZA&usqp=CAU');

create table Category(
	id int(11) primary key auto_increment,
	name varchar(50) not null
);

INSERT INTO Category(id , name) VALUES
(1, 'Vegan'),
(2, 'Non-Vegan');

create table Ingredients(
	id int primary key auto_increment,
	calories float ,
	name varchar(50) not null
);

insert into Ingredients(id, calories, name) values 
(1, 23.4, 'Cheese'),
(2, 1000, 'Olive oil'),
(3, 4, 'Tomato sauce'),
(4, 14.2, 'Olives'),
(5, 0.1, 'Oregano');

create table Ingredients_Pizza(
	IngredientID int,
	PizzaID int,
	constraint FK_Ingredients_Pizza foreign key (IngredientID) references Ingredients(id),
	constraint FK_Pizza_Ingredients foreign key (PizzaID) references Pizza(id)
);

insert into Ingredients_Pizza(PizzaID, IngredientID) values 
(1, 1),
(1, 3),
(1, 5),
(1, 2),
(2, 1);


create table Payments(
	id int primary key auto_increment,
	paymentDate date not null,
	paymentType varchar(20) not null,
	amountDue float not null,
	OrderID int,
	constraint FK_OrderHeaders_Payments foreign key (OrderID) references OrderHeaders(id)
);

alter table OrderHeaders
	add UserID int;
alter table OrderHeaders
	add constraint FK_Users_OrderHeaders foreign key (`UserID`) references Users(id) ON DELETE CASCADE ON UPDATE CASCADE;;


alter table OrderLine
add OrderID int,
ADD	constraint FK_OrderHeaders_OrderLine foreign key (OrderID) references OrderHeaders(id);


alter table Pizza
add OrderLineID int,
add	constraint FK_OrderLine_Pizza foreign key (OrderLineID) references OrderLine(id),
add constraint FK_Pizza_Category foreign key (category_id) references Category(id)
