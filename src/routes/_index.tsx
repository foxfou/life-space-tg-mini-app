import type { MetaFunction } from "@remix-run/node"
export { Home as default } from '@/scopes/Home/leaves/App-Home'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ]
}
