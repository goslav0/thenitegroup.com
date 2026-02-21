import './globals.css'
import Script from 'next/script'
import Navbar from "./components/Navbar"

export const metadata = {
  title: 'THE NITE GROUP',
  description: 'Ekskluzywne wydarzenia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <head>
        <Script id="posthog-init" strategy="afterInteractive">
          {`
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(r=t.createElement("script")).type="text/javascript",r.async=!0,r.src=s.api_host+"/static/array.js",(p=t.getElementsByTagName("script")[0]).parentNode.insertBefore(r,p);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing set_user_props get_distinct_id track_pageview debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('phc_t7ykpk4saxTGtF2fuHakuALuhszs8EhTF2xfSkCOrir', {api_host: 'https://eu.i.posthog.com', person_profiles: 'always'})
          `}
        </Script>
      </head>
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
