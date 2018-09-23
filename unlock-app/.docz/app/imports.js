export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/docz/Account/Accounts.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docz-account-accounts" */ 'src/docz/Account/Accounts.mdx'),
  'src/docz/Icons/Icons.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docz-icons-icons" */ 'src/docz/Icons/Icons.mdx'),
}
