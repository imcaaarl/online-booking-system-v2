import { exec } from 'node:child_process';
import { promises as fs } from 'node:fs';
import { promisify } from 'node:util';
import readline from 'node:readline';
import path from 'node:path';

function question(query: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    }),
  );
}

async function getPostgresURL(): Promise<string> {
  console.log('Step 1: Setting up Postgres');

  let envDbHost = 'localhost';
  let envDbPort = '5432';
  let envDbUsername = 'postgres';
  let envDbPassword = 'postgres';
  let envDbDatabaseName = 'appointment';

  const dbhost = await question(`Enter database hostname (default: ${envDbHost}): `);
  envDbHost = dbhost.toLowerCase() || envDbHost;
  console.log('hostname: ', envDbHost);

  ////////////////

  const dbport = await question(`Enter database port (default: ${envDbPort}): `);
  envDbPort = dbport || envDbPort;
  console.log('port: ', envDbPort);

  ////////////////

  const dbusername = await question(`Enter database username (default: ${envDbUsername}): `);
  envDbUsername = dbusername.toLowerCase() || envDbUsername;
  console.log('username: ', envDbUsername);

  ////////////////

  const dbpassword = await question(`Enter database password (default: ${envDbPassword}): `);
  envDbPassword = dbpassword || envDbPassword;
  console.log('password: ', envDbPassword);

  ////////////////

  const databasename = await question(`Enter database name (default: ${envDbDatabaseName}): `);
  envDbDatabaseName = databasename.toLowerCase() || envDbDatabaseName;
  console.log('database name: ', envDbDatabaseName);

  ////////////////

  return `postgres://${envDbUsername}:${envDbPassword}@${envDbHost}:${envDbPort}/${envDbDatabaseName}`;
}

async function writeEnvFile(envVars: Record<string, string>) {
  console.log('Step 3: Writing environment variables to .env');
  const envContent = Object.entries(envVars)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');

  await fs.writeFile(path.join(process.cwd(), '.env'), envContent);
  console.log('.env file created with the necessary variables.');
}

async function main() {
  const POSTGRES_URL = await getPostgresURL();

  await writeEnvFile({
    POSTGRES_URL,
  });

  console.log('🎉 Setup completed successfully!');
}

main().catch(console.error);
