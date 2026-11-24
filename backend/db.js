import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

if (!process.env.DATABASE_URL) {
    throw new Error ("Missing DATABASE_URL in .env file");
}

const sql = postgres(connectionString);

export default sql;