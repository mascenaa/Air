-- Active: 1708945733816@@127.0.0.1@5432@airdb
CREATE TABLE IF NOT EXISTS "user" (
    "id" serial PRIMARY KEY, "name" varchar(255) NOT NULL, "email" varchar(255) NOT NULL, "password" varchar(255) NOT NULL, "created_at" timestamp NOT NULL, "updated_at" timestamp NOT NULL
);