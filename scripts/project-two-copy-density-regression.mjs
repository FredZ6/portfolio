import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')

assert(source.includes("description: 'AWS order platform with 6 event-driven services, Terraform IaC, and CI/CD release gates.'"), 'Expected the shorter project two description.')
assert(source.includes("'Delivered auth, catalog, orders, inventory, payment, and notifications.'"), 'Expected the shorter first delivery bullet.')
assert(source.includes("'Coordinated order, payment, and inventory flows with saga orchestration.'"), 'Expected the shorter second delivery bullet.')
assert(source.includes("'Protected releases with required CI checks and Terraform updates.'"), 'Expected the shorter third delivery bullet.')
assert(!source.includes('Cloud-native order platform built on AWS with microservices, Terraform IaC, and CI/CD quality gates.'), 'Expected the longer project two description to be removed.')
assert(!source.includes('Implemented saga orchestration across order, payment, and inventory lifecycles to coordinate cross-service state changes.'), 'Expected the longer desktop delivery copy to be removed.')

console.log('Project two copy density regression checks passed.')
