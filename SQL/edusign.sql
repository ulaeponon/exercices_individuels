-- Premiere table edusign 
CREATE TABLE edusign(
    id INTEGER PRIMARY KEY AUTOINCREMENT ,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);
-- Creation de la table users 
CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);
--  Suppression de la table edusign
DROP TABLE edusign;
-- Restructuration de la table edusign 

CREATE TABLE edusign (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER REFERENCES users(id),
    signature_date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Insertion des données 
INSERT INTO users (firstname, lastname, email) VALUES ('Ada', 'Lovelace', 'ada@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Beatrice', 'Worsley', 'bea@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Bella', 'Guerin', 'bella@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Barbara', 'Chase', 'barbara@test.fr');
-- Sélectionner toutes les lignes de la table users
SELECT * FROM users;
-- Sélectionner uniquement la ligne où le prénom est Ada dans la table users
SELECT * FROM users WHERE firstname = 'Ada';
-- Sélectionner les lignes dont la première lettre du prénom est un B dans la table users
SELECT * FROM users WHERE firstname like 'B%';
-- Compter le nombre de ligne qu’il y a dans la table users
SELECT COUNT(*) FROM users;
-- 
SELECT COUNT(*) FROM users WHERE firstname LIKE 'B%';
SELECT firstname FROM users;

INSERT INTO edusign (user_id, signature_date) VALUES (1, '2024-05-30 09:30:00');
INSERT INTO edusign (user_id, signature_date) VALUES (2, '2024-05-30 09:30:00');

INSERT INTO edusign (user_id, signature_date) VALUES
(1, '2024-09-01 09:30:00'),
(2, '2024-09-01 09:30:00'),
(3, '2024-09-01 09:30:00'),
(4, '2024-09-01 09:30:00');
SELECT * FROM edusign ORDER BY signature_date DESC, user_id ASC;

SELECT * FROM edusign WHERE signature_date ='2024-05-30 09:30:00';



