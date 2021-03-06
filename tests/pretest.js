import thinky from '../src/server/database/models/thinky';
const {r} = thinky;

export default async function pretest() {
  const tables = await r.tableList();
  await Promise.all(tables.map(table => r.table(table).delete()));
  await r.getPool().drain();
}

