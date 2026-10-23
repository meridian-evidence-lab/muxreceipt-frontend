# Architecture and trust boundaries

Responsive browser UI with JSON/file imports, synthetic samples, persisted audit history, findings, JSON/HTML exports, and unsigned contract proposals. Framework-free modules keep the contributor setup small. The local proxy isolates browser requests from API credentials.

## Dependency graph

Frontend → backend → core + review + contracts/proposal.mjs.
Contracts use soroban-sdk 29.0.1. The CLI and scenarios stay independent operator/testing tools.
See INTEGRATION.md for the runnable data flow and openapi.json in the backend for HTTP routes.

## What is verified

Core rules operate on normalized inputs, not authenticated ledger records. Provider labels are
caller-supplied. A local audit may agree with another export while both omit the same event.
Contract proposal JSON is explicitly unsigned; no deployment, signing, simulation or submission
is silently performed. A public commitment can establish publication and revision order, not
customer identity, reserve sufficiency, compliance, or source completeness.

## Persistence and access

The API writes audit inputs/reports into SQLite using prepared statements. Mapping updates are
validated as a whole before replacement. Services bind to 127.0.0.1, restrict Host/Origin, accept
optional API_TOKEN, and bound JSON imports to 1 MiB. No web-accessible multi-tenant authentication
is present. SQLite inputs may contain sensitive metadata; keep data/ and .env out of Git.
Production deployments need authenticated tenant isolation, retention/privacy policy, migrations,
rate limits, robust worker orchestration, and independent review.
