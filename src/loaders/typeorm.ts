import { appDataSource } from '../data-source';

export default async function loadTypeorm() {
  await appDataSource.initialize();
  console.log('connect database success');
}
