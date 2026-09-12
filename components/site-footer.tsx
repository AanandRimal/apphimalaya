import { nav, site, whatsappLink } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1440px] px-6 py-14 lg:px-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <p className="text-[0.95rem] font-semibold tracking-tight">
              apphimalaya<span className="text-muted-foreground">.com</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
              Software built in {site.location}, for teams anywhere.
            </p>
          </div>
          <div className="flex gap-14 text-sm">
            <div className="flex flex-col gap-3">
              {nav.map(([href, label]) => (
                <a key={href} href={href} className="text-muted-foreground transition-colors hover:text-foreground">
                  {label}
                </a>
              ))}
              <a href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                Contact
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${site.email}`} className="text-muted-foreground transition-colors hover:text-foreground">
                {site.email}
              </a>
              <a
                href={whatsappLink('Hi apphimalaya, I have a project in mind.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <p className="mt-14 border-t border-border pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} apphimalaya.com
        </p>
      </div>
    </footer>
  )
}
