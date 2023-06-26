import fs from 'fs';
import { config } from './src/config';

fs.writeFileSync(
  '.postgratorrc.json',
  JSON.stringify({ ...config.db, username: config.db.user }, null, 2),
);
