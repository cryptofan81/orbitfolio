export default function Home() {
  return (
    <main style={{padding:40,fontFamily:'Inter, system-ui'}}>
      <header style={{display:'flex',alignItems:'center',gap:20}}>
        <img src="/orbitfolio-wordmark.svg" alt="OrbitFolio" style={{height:48}}/>
        <div style={{marginLeft:10}}>
          <h1 style={{margin:0}}>OrbitFolio</h1>
          <p style={{margin:0,color:'#6b7280'}}>See your portfolio in motion — demo preview</p>
        </div>
      </header>
      <section style={{marginTop:32}}>
        <div style={{background:'#fff',padding:20,borderRadius:12,boxShadow:'0 6px 18px rgba(11,18,32,0.06)'}}>
          <h2 style={{marginTop:0}}>Demo portfolio</h2>
          <p>Seeded with AAPL and RELIANCE. Sign in (demo) to view dashboard and TA lab.</p>
          <a href="/dashboard" style={{display:'inline-block',marginTop:12,padding:'10px 14px',background:'#FFB020',color:'#fff',borderRadius:8,textDecoration:'none'}}>Open demo</a>
        </div>
      </section>
    </main>
  );
}
