import fs from 'fs';
import { config } from './src/config';

fs.writeFileSync('.postgratorrc.json', JSON.stringify(config.db, null, 2));
console.log('File created!!!');
