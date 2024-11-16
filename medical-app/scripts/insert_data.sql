-- Insertar especialidades
INSERT INTO specialty (name) VALUES ('Medicina General'), ('Cardiología'), ('Urología'), ('Pediatría');

-- Insertar médicos
INSERT INTO doctor (name, age, email, password, specialty_id) VALUES
('Dr. Pérez', 45, 'drperez@hospital.com', 'hashedpassword1', 1),
('Dra. García', 38, 'dragarcía@hospital.com', 'hashedpassword2', 2),
('Dr. Rodríguez', 50, 'drrodriguez@hospital.com', 'hashedpassword3', 3),
('Dra. López', 40, 'dralopez@hospital.com', 'hashedpassword4', 4),
('Dr. Martínez', 55, 'drmartinez@hospital.com', 'hashedpassword5', 1);

-- Insertar pacientes
INSERT INTO patient (name, age, email, password) VALUES
('Alice', 30, 'alice@domain.com', 'hashedpassword1'),
('Bob', 45, 'bob@domain.com', 'hashedpassword2'),
('Charlie', 25, 'charlie@domain.com', 'hashedpassword3'),
('David', 35, 'david@domain.com', 'hashedpassword4'),
('Eve', 29, 'eve@domain.com', 'hashedpassword5'),
('Frank', 50, 'frank@domain.com', 'hashedpassword6'),
('Grace', 40, 'grace@domain.com', 'hashedpassword7'),
('Hank', 60, 'hank@domain.com', 'hashedpassword8'),
('Ivy', 28, 'ivy@domain.com', 'hashedpassword9'),
('Jack', 33, 'jack@domain.com', 'hashedpassword10');
