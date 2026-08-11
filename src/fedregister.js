const UA = 'FederalRegisterTracker/0.1 (+contact: federal-register-tracker-admin@example.com)';
const BASE_URL = 'https://www.federalregister.gov/api/v1/documents.json';

const FIELDS = ['document_number', 'title', 'type', 'agencies', 'publication_date', 'comments_close_on', 'html_url', 'pdf_url', 'abstract'];

function isoDate(d) {
    return d.toISOString().slice(0, 10);
}

export async function fetchDocuments({ keyword, agencySlug, documentType, startDate, endDate, limit }) {
    const params = new URLSearchParams();
    params.set('conditions[publication_date][gte]', isoDate(startDate));
    params.set('conditions[publication_date][lte]', isoDate(endDate));
    params.set('per_page', String(limit));
    params.set('order', 'newest');
    if (keyword) params.set('conditions[term]', keyword);
    if (agencySlug) params.append('conditions[agencies][]', agencySlug);
    if (documentType && documentType !== 'all') params.append('conditions[type][]', documentType);
    for (const f of FIELDS) params.append('fields[]', f);

    const res = await fetch(`${BASE_URL}?${params}`, { headers: { 'User-Agent': UA } });
    if (!res.ok) throw new Error(`Federal Register request failed: ${res.status}`);

    const data = await res.json();
    return (data.results ?? []).map((doc) => ({
        documentNumber: doc.document_number,
        title: doc.title,
        type: doc.type,
        agencies: (doc.agencies ?? []).map((a) => a.name),
        publicationDate: doc.publication_date,
        commentsCloseOn: doc.comments_close_on ?? null,
        abstract: doc.abstract,
        htmlUrl: doc.html_url,
        pdfUrl: doc.pdf_url,
    }));
}
