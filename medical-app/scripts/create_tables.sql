CREATE DATABASE medical_app;

\c medical_app;

CREATE TABLE specialty (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE doctor (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    specialty_id INTEGER REFERENCES specialty(id)
);

CREATE TABLE patient (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE medicalappointment (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    hour TIME NOT NULL,
    patient_id INTEGER REFERENCES patient(id),
    doctor_id INTEGER REFERENCES doctor(id)
);
