# Federal Register Tracker: New Rules & Deadlines

New U.S. federal regulations for compliance, regulatory affairs and legal
teams. Search the Federal Register by keyword, agency or document type and
get newly published proposed rules, final rules and notices, with the
public comment deadline where there is one.

## What you get

One row per document:

- Title, type (proposed rule, final rule, notice) and issuing agencies
- Publication date and comment deadline
- The abstract
- Links to the official HTML and PDF

## Who this is for

- **Compliance and regulatory affairs teams** tracking new rules that affect their industry.
- **Law firms and lobbyists** following rulemaking by agency or topic.
- **Trade associations and policy researchers** catching comment periods before they close.

## Input

```json
{
  "keyword": "data privacy",
  "agencySlug": "environmental-protection-agency",
  "documentType": "PRORULE",
  "daysBack": 14,
  "maxResults": 25
}
```

| Field | Type | Description |
|---|---|---|
| `keyword` | string | Free-text search across document titles and text. Leave blank to skip. |
| `agencySlug` | string | Limit to one agency, using its Federal Register slug (e.g. `environmental-protection-agency`, `securities-and-exchange-commission`, `food-and-drug-administration`) — found in the agency's federalregister.gov URL. |
| `documentType` | string | `all`, `RULE` (final), `PRORULE` (proposed, open for comment), `NOTICE`, or `PRESDOCU`. Default `all`. |
| `daysBack` | number | How many days back from today to search, by publication date. Default `14`, max `180`. |
| `maxResults` | number | Max documents to return, most recent first. Default `25`, max `100`. |

## Output

One record per document:

```json
{
  "documentNumber": "2026-16335",
  "title": "Air Quality Plan; Arizona; Maricopa County Air Quality Department; Gasoline Loading",
  "type": "Proposed Rule",
  "agencies": ["Environmental Protection Agency"],
  "publicationDate": "2026-08-11",
  "commentsCloseOn": "2026-09-10",
  "abstract": "The U.S. Environmental Protection Agency (EPA) is proposing to approve...",
  "htmlUrl": "https://www.federalregister.gov/documents/2026/08/11/2026-16335/...",
  "pdfUrl": "https://www.govinfo.gov/content/pkg/FR-2026-08-11/pdf/2026-16335.pdf"
}
```

`commentsCloseOn` is `null` for document types that don't take public
comment (most notices, final rules already in effect).

## How it works

Direct calls to the official [Federal Register](https://www.federalregister.gov/)
API — the U.S. government's public rulemaking database. No API key, no
proxy, no login, no scraping.

## Pricing note

Billed per **search**, not per document returned — one charge whether the
search returns 1 document or 100.

## Related products

Looking for other compliance/risk-monitoring signals?

- [FDA Recall Tracker](https://apify.com/m_ctim/product-recall-alert): FDA drug/food/device recalls
- [CVE Tracker](https://apify.com/m_ctim/vulnerability-alert): new CVEs by product and severity
