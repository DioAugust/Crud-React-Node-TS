create table cargos (
	idCargo int primary key auto_increment,
	nomeCargo varchar(30) not null,
    descricaoCargo varchar(60)
);

create table funcionarios (
	idFuncionario int primary key auto_increment,
    nome varchar(30),
    sobrenome varchar (30),
    cargoId int,
    nascimento date,
    salario float,
    
    foreign key(cargoId) references cargos(idCargo)
);

INSERT INTO cargos (nomeCargo, descricaoCargo) VALUES ('carro', 'teste');
INSERT INTO funcionarios (nome, sobrenome, cargoId, nascimento, salario) VALUES ('teste', 'teste', 1, '2000-03-23', 34.5);

UPDATE funcionarios set cargoId=2 where idFuncionario= 11

select * from funcionarios;
select * from cargos;


