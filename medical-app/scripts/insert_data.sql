-- Insertar datos en la tabla Patient
INSERT INTO patient (name, age, email, password) VALUES
('María Gómez', 30, 'maria.gomez@example.com', 'hashedpassword1'),
('Luis Rodríguez', 28, 'luis.rodriguez@example.com', 'hashedpassword2'),
('Carmen Fernández', 35, 'carmen.fernandez@example.com', 'hashedpassword3'),
('José Hernández', 40, 'jose.hernandez@example.com', 'hashedpassword4'),
('Lucía Sánchez', 22, 'lucia.sanchez@example.com', 'hashedpassword5');

-- Insertar datos en la tabla Specialty
INSERT INTO specialty (name) VALUES
('Cardiology'), ('Neurology'), ('Orthopedics');

-- Insertar datos en la tabla Doctor
INSERT INTO doctor (name, age, email, password, specialty_id) VALUES
('Dr. Ana Perez', 45, 'ana.perez@example.com', 'hashedpassword6', 1),
('Dr. Juan Martinez', 50, 'juan.martinez@example.com', 'hashedpassword7', 2);

-- Insertar datos en la tabla MedicalAppointment
INSERT INTO medicalappointment (date, hour, patient_id, doctor_id) VALUES
('2024-11-25', '10:00', 1, 1), ('2024-11-26', '11:00', 2, 2);
