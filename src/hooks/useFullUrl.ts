import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'

const isDev = process.env.NODE_ENV === 'development'

export default function useFullUrl(uri) {
  const { siteConfig } = useDocusaurusContext()
  if (isDev) return uri
  let { url } = siteConfig || {}
  return `${url}${useBaseUrl(uri)}`
}
