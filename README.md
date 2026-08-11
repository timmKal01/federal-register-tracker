# Federal Register Tracker — New Rules & Comment Deadlines

Search newly published Federal Register documents by keyword, agency, or
document type. Get proposed rules, final rules, and notices — with public
comment deadlines where they apply — instead of checking federalregister.gov
by hand.

Built for compliance and regulatory affairs teams, lobbyists, and law firms
tracking new rulemaking in their industry or agency.

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

- [Product Recall Alert](https://github.com/timmKal01/product-recall-alert) — FDA drug/food/device recalls
- [Vulnerability Alert](https://github.com/timmKal01/vulnerability-alert) — new CVEs by product and severity
