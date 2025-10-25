import React from 'react'

export default function Demo(){
  return (
    <section>
      <h2>Demo — Safe simulations</h2>

      <article className="card" style={{textAlign:'left'}}>
        <h3>Sample fake SMS (demo)</h3>
        <div style={{background:'none', padding:8, borderRadius:6}}>
          <p><strong>From:</strong> +91 98xx xxxx</p>
          <p><strong>Message:</strong> "Your package requires a delivery fee. Click https://fake-delivery.example to pay. Reply with OTP to confirm."</p>
        </div>
        <p className="small-muted">This is a demo only — real phishing often uses urgent language and fake links. Do not click such links.</p>
      </article>

      <article className="card" style={{textAlign:'left', marginTop:12}}>
        <h3>How to check app permissions (demo)</h3>
        <ol>
          <li>Open Settings &gt; Apps &gt; select the app.</li>
          <li>Tap Permissions. Review which permissions the app has.</li>
          <li>Revoke permissions that are not needed (e.g., camera for flashlight).</li>
        </ol>
      </article>

      <article className="card" style={{textAlign:'left', marginTop:12}}>
        <h3>How to enable updates (demo)</h3>
        <ol>
          <li>Open Play Store / App Store &gt; tap your profile &gt; Manage apps &amp; device &gt; Enable Auto-update.</li>
          <li>For system updates: Settings &gt; System &gt; Software update &gt; Turn on automatic updates.</li>
        </ol>
      </article>
    </section>
  )
}
