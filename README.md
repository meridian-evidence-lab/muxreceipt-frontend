# MuxReceipt · Browser audit workspace

Responsive browser UI with JSON/file imports, synthetic samples, persisted audit history, findings, JSON/HTML exports, and unsigned contract proposals. Framework-free modules keep the contributor setup small. The local proxy isolates browser requests from API credentials.

**Version 0.2.0 — connected local-development scaffold.** This is functional development software,
not an audited production service. It is part of the [meridian-evidence-lab](https://github.com/meridian-evidence-lab) open-source project.

## Start here

Read [INTEGRATION.md](INTEGRATION.md) for complete clone commands, the seven-repository map,
local run instructions, API behavior and contract boundaries.

```bash
npm test
npm start
```

Node.js 24+ is required. Clone the sibling core, review, contracts and backend repositories
as described in the integration guide. There is no npm dependency installation step.

`npm run dev` starts both the frontend and API from sibling checkouts.

## Contributing

[BACKLOG.md](BACKLOG.md) lists prioritized, testable contributions. Follow
[CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
Report vulnerabilities through the private process in [SECURITY.md](SECURITY.md).
Source is MIT-licensed. No Drips approval, security audit, or mainnet deployment is claimed.
