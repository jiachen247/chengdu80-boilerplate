create table users
(
	user_id integer not null
		constraint users_pkey
			primary key,
	username varchar(50),
	passwd varchar(50)
);

alter table users owner to jiachen;

