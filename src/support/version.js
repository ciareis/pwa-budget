const logVersion = (version, BOOT_TIME) => {
  const appName = import.meta.env.VITE_APP_NAME

  const hasSw = (navigator.serviceWorker && navigator.serviceWorker.controller)
  const mode = (window.matchMedia('(display-mode: standalone)').matches)
    ? 'standalone'
    : 'web'

  const sw = hasSw
    ? 'sw-on'
    : 'sw-off'

  // eslint-disable-next-line
  console.log(
    `%c ${appName} %c v${version} %c ${mode}/${sw} (${(Date.now() - BOOT_TIME)}ms) %c`,
    'background:#006999 ; padding: 3px; border-radius: 3px 0 0 3px;  color: #fff',
    'background:#0095da ; padding: 3px; border-radius: 0 0 0 0;  color: #fff',
    `background:#${hasSw ? '21ba45' : 'db2828'} ; padding: 3px; border-radius: 0 3px 3px 0;  color: #fff`,
    'background:transparent'
  )
}

export { logVersion }
