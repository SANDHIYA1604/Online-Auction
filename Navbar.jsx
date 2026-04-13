import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user') || 'null')

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <nav style={{ background:'#1a1a2e', padding:'12px 24px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
      <Link to="/" style={{ color:'#e94560', fontWeight:'bold', fontSize:20, textDecoration:'none' }}>
        🔨 AuctionSystem
      </Link>
      <div style={{ display:'flex', gap:16, alignItems:'center' }}>
        {user ? (
          <>
            <span style={{ color:'#fff' }}>Hi, {user.name}</span>
            <Link to="/create" style={{ color:'#e94560', textDecoration:'none' }}>+ Create Auction</Link>
            <button onClick={logout} style={{ background:'transparent', border:'1px solid #e94560', color:'#e94560', padding:'6px 14px', borderRadius:4, cursor:'pointer' }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color:'#fff', textDecoration:'none' }}>Login</Link>
            <Link to="/register" style={{ color:'#e94560', textDecoration:'none' }}>Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}