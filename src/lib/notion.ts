import { Client } from '@notionhq/client';
import type { User } from './user.model';

const API_KEY = import.meta.env.NOTION_API_KEY // ?? Astro.locals.runtime?.env?.NOTION_API_KEY;
//const DB_ID = import.meta.env.NOTION_DATABASE_ID // ?? Astro.locals.runtime?.env?.NOTION_DATABASE_ID;
const DATA_SOURCE_ID = import.meta.env.NOTION_DATA_SOURCE_ID // ?? Astro.locals.runtime?.env?.NOTION_DATA_SOURCE_ID;

// console.log('Notion API Key:', API_KEY)

export const getDatabaseItems = async (): Promise<User[]> => {
  if (!API_KEY || !DATA_SOURCE_ID) {
    console.error('API key or Database ID is missing');
    return [];
  }

  const notion = new Client({ 
    auth: API_KEY,
    fetch: (url, init) => {
      return fetch(url, init);
    }
  });


  try {
    let response: any = await notion.dataSources.query({
      data_source_id: DATA_SOURCE_ID,
      filter: {
        property: 'Tipo',
        status: {
          equals: 'Campero',
        },
      },
    });

    // devolver solo las propiedades de cada resultado
    response = { results: response.results.map((item: any) => item.properties) };
    return response.results;
  } catch (error) {
    console.error('Error querying Notion database:', error);
    return [];
  }
};