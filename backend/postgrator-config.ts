import fs from 'fs';
import { config } from './src/config';

console.log({ config: config.db });
fs.writeFileSync('.postgratorrc.json', JSON.stringify(config.db, null, 2));
