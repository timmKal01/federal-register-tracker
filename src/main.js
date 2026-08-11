import { Actor, log } from 'apify';
import { fetchDocuments } from './fedregister.js';

await Actor.init();

const input = (await Actor.getInput()) ?? {};
const { keyword, agencySlug, documentType = 'all', daysBack = 14, maxResults = 25 } = input;

/** Must match the event name configured in this Actor's pay-per-event pricing on Apify. */
const REGULATION_SEARCH_EVENT = 'regulation-search';

const endDate = new Date();
const startDate = new Date(endDate.getTime() - daysBack * 24 * 60 * 60 * 1000);

const documents = await fetchDocuments({
    keyword,
    agencySlug,
    documentType,
    startDate,
    endDate,
    limit: Math.min(maxResults, 100),
});

for (const doc of documents) {
    await Actor.pushData(doc);
}

await Actor.charge({ eventName: REGULATION_SEARCH_EVENT });

log.info(`Pushed ${documents.length} document(s)`);

await Actor.exit();
