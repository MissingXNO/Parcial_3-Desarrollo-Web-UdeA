-- Crear tabla Patient
CREATE TABLE patient (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- Crear tabla Doctor
CREATE TABLE doctor (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    specialty_id INTEGER NOT NULL
);

-- Crear tabla Specialty
CREATE TABLE specialty (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Crear tabla MedicalAppointment
CREATE TABLE medicalappointment (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    hour TIME NOT NULL,
    patient_id INTEGER REFERENCES patient(id),
    doctor_id INTEGER REFERENCES doctor(id)
);
