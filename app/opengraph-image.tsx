import { ImageResponse } from 'next/og'

export const alt = 'App Himalaya — software development company in Kathmandu, Nepal'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/** Generated at build time so there is no binary asset to keep in sync. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#050f0a',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, color: '#99a79f', letterSpacing: -0.5 }}>
          apphimalaya<span style={{ color: '#85d673' }}>.com.np</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 118, fontWeight: 700, color: '#eff5f2', letterSpacing: -5 }}>
            Build the
          </div>
          <div style={{ display: 'flex', fontSize: 118, fontWeight: 700, color: '#85d673', letterSpacing: -5 }}>
            unbelievable.
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 30, color: '#99a79f' }}>
          Software development · Kathmandu, Nepal
        </div>
      </div>
    ),
    size,
  )
}
