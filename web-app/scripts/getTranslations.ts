/* eslint-disable no-console */
/* eslint-disable import/no-named-default */
import * as path from 'path';
import * as fs from 'fs';
import getMicrocopyCollection from '../src/apiHandlers/getMicrocopyCollection';
import deleteFolderRecursive from './utils';

const esFilePath = path.join(__dirname, '../../public/locales/es/common.json');
const enFilePath = path.join(__dirname, '../../public/locales/en/common.json');

const main = async () => {
  const {microcopyCollection: esMicrocopy} = await getMicrocopyCollection('es-419', 10000);
  const esJson: Record<string, string> = {};
  esMicrocopy.forEach((element: {key: string; text: string}) => {
    esJson[element.key] = element.text;
  });

  fs.writeFileSync(esFilePath, JSON.stringify(esJson, null, 2));

  const {microcopyCollection: enMicrocopy} = await getMicrocopyCollection('en-US', 10000);
  const enJson: Record<string, string> = {};
  enMicrocopy.forEach((element: {key: string; text: string}) => {
    enJson[element.key] = element.text;
  });

  fs.writeFileSync(enFilePath, JSON.stringify(enJson, null, 2));
};

console.log('Generating translation files from Contentful...');

main()
  .then(() => console.log('Successfully generated translation files.'))
  .catch(err => console.error(err))
  .finally(() => {
    console.log('Deleting tempScripts directory...');
    deleteFolderRecursive('./tempScripts');
    console.log('Successfully deleted tempScripts directory.');
  });
