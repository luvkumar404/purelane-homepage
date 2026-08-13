import Reveal from './Reveal'

function ProductSvg({ type }) {
  if (type === 'svg-tap') {
    return (
      <svg viewBox="0 0 130 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gTAPb" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".10" />
            <stop offset=".18" stopColor="#ffffff" stopOpacity=".38" />
            <stop offset=".5" stopColor="#dff3e4" stopOpacity=".10" />
            <stop offset=".82" stopColor="#ffffff" stopOpacity=".22" />
            <stop offset="1" stopColor="#9fc7b4" stopOpacity=".32" />
          </linearGradient>
          <linearGradient id="gTAPl" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#04756e" />
            <stop offset=".55" stopColor="#4b3a8f" />
            <stop offset="1" stopColor="#013f3d" />
          </linearGradient>
          <linearGradient id="gTAPc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#8fa89b" />
            <stop offset=".22" stopColor="#eef6ef" />
            <stop offset="1" stopColor="#7d938c" />
          </linearGradient>
        </defs>
        <ellipse cx="65" cy="190" rx="40" ry="7" fill="#01201c" opacity=".5" />
        <path d="M40 60V48c0-7 5-12 12-12h13c8 0 13 6 13 13v11Z" fill="url(#gTAPc)" />
        <path d="M65 37c11-1 19 3 25 10 3 4 2 9-2 10l-20 3Z" fill="#cfdcd2" />
        <path d="M14 44h27v9H19c-4 0-6-2-6-4s1-5 1-5Z" fill="#cfdcd2" />
        <path d="M44 52c-7 3-11 9-10 16 1 6 5 10 12 10v-6c-4 0-6-2-6-5s2-6 5-7Z" fill="#cfdcd2" />
        <rect x="38" y="56" width="42" height="7" rx="3" fill="#a8bdb2" />
        <rect x="41" y="62" width="36" height="16" rx="4" fill="url(#gTAPc)" />
        <path d="M28 96c0-11 6-18 15-24v-8h33v8c9 6 15 13 15 24v62c0 12-8 20-21 20H49c-13 0-21-8-21-20Z" fill="url(#gTAPb)" stroke="rgba(255,255,255,.4)" strokeWidth="1.4" />
        <rect x="31" y="112" width="66" height="60" rx="6" fill="url(#gTAPl)" />
        <rect x="31" y="112" width="66" height="60" rx="6" fill="none" stroke="rgba(236,230,247,.26)" strokeWidth="1" />
        <g transform="translate(58 120) scale(.5)" fill="none" stroke="#f0a03c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21c0-6.5 3.5-11 8-12.5C20 15 16.5 20 12 21Z" />
          <path d="M12 21C12 14.5 8.5 10 4 8.5 4 15 7.5 20 12 21Z" />
        </g>
        <text x="64" y="140" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="8.6" fontWeight="800" letterSpacing=".7" fill="#faf7fd">PURELANE</text>
        <line x1="42" y1="146" x2="86" y2="146" stroke="#f0a03c" strokeWidth=".9" opacity=".85" />
        <text x="64" y="156" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6.4" fontWeight="700" letterSpacing="1.1" fill="#ece6f7">TAP CLEANER</text>
        <text x="64" y="164" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6.4" fontWeight="700" letterSpacing="1.1" fill="#ece6f7">LIMESCALE</text>
        <text x="64" y="171" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="4.8" fontWeight="600" letterSpacing=".9" fill="rgba(236,230,247,.7)">500 ML</text>
        <rect x="36" y="98" width="6" height="72" rx="3" fill="#ffffff" opacity=".3" />
        <rect x="86" y="102" width="4" height="64" rx="2" fill="#ffffff" opacity=".18" />
      </svg>
    )
  }

  if (type === 'svg-kitchen') {
    return (
      <svg viewBox="0 0 130 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gKITb" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".10" />
            <stop offset=".18" stopColor="#ffffff" stopOpacity=".38" />
            <stop offset=".5" stopColor="#dff3e4" stopOpacity=".10" />
            <stop offset=".82" stopColor="#ffffff" stopOpacity=".22" />
            <stop offset="1" stopColor="#9fc7b4" stopOpacity=".32" />
          </linearGradient>
          <linearGradient id="gKITl" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#04756e" />
            <stop offset=".55" stopColor="#4b3a8f" />
            <stop offset="1" stopColor="#013f3d" />
          </linearGradient>
          <linearGradient id="gKITc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#8fa89b" />
            <stop offset=".22" stopColor="#eef6ef" />
            <stop offset="1" stopColor="#7d938c" />
          </linearGradient>
        </defs>
        <ellipse cx="65" cy="190" rx="40" ry="7" fill="#01201c" opacity=".5" />
        <path d="M40 60V48c0-7 5-12 12-12h13c8 0 13 6 13 13v11Z" fill="url(#gKITc)" />
        <path d="M65 37c11-1 19 3 25 10 3 4 2 9-2 10l-20 3Z" fill="#cfdcd2" />
        <path d="M14 44h27v9H19c-4 0-6-2-6-4s1-5 1-5Z" fill="#cfdcd2" />
        <path d="M44 52c-7 3-11 9-10 16 1 6 5 10 12 10v-6c-4 0-6-2-6-5s2-6 5-7Z" fill="#cfdcd2" />
        <rect x="38" y="56" width="42" height="7" rx="3" fill="#a8bdb2" />
        <rect x="41" y="62" width="36" height="16" rx="4" fill="url(#gKITc)" />
        <path d="M28 96c0-11 6-18 15-24v-8h33v8c9 6 15 13 15 24v62c0 12-8 20-21 20H49c-13 0-21-8-21-20Z" fill="url(#gKITb)" stroke="rgba(255,255,255,.4)" strokeWidth="1.4" />
        <rect x="31" y="112" width="66" height="60" rx="6" fill="url(#gKITl)" />
        <rect x="31" y="112" width="66" height="60" rx="6" fill="none" stroke="rgba(236,230,247,.26)" strokeWidth="1" />
        <g transform="translate(58 120) scale(.5)" fill="none" stroke="#f0a03c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21c0-6.5 3.5-11 8-12.5C20 15 16.5 20 12 21Z" />
          <path d="M12 21C12 14.5 8.5 10 4 8.5 4 15 7.5 20 12 21Z" />
        </g>
        <text x="64" y="140" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="8.6" fontWeight="800" letterSpacing=".7" fill="#faf7fd">PURELANE</text>
        <line x1="42" y1="146" x2="86" y2="146" stroke="#f0a03c" strokeWidth=".9" opacity=".85" />
        <text x="64" y="156" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6.4" fontWeight="700" letterSpacing="1.1" fill="#ece6f7">KITCHEN</text>
        <text x="64" y="164" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6.4" fontWeight="700" letterSpacing="1.1" fill="#ece6f7">CLEANER</text>
        <text x="64" y="171" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="4.8" fontWeight="600" letterSpacing=".9" fill="rgba(236,230,247,.7)">500 ML</text>
        <rect x="36" y="98" width="6" height="72" rx="3" fill="#ffffff" opacity=".3" />
        <rect x="86" y="102" width="4" height="64" rx="2" fill="#ffffff" opacity=".18" />
      </svg>
    )
  }

  if (type === 'svg-copper') {
    return (
      <svg viewBox="0 0 130 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gCOPb" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".10" />
            <stop offset=".18" stopColor="#ffffff" stopOpacity=".38" />
            <stop offset=".5" stopColor="#dff3e4" stopOpacity=".10" />
            <stop offset=".82" stopColor="#ffffff" stopOpacity=".22" />
            <stop offset="1" stopColor="#9fc7b4" stopOpacity=".32" />
          </linearGradient>
          <linearGradient id="gCOPl" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#04756e" />
            <stop offset=".55" stopColor="#4b3a8f" />
            <stop offset="1" stopColor="#013f3d" />
          </linearGradient>
          <linearGradient id="gCOPc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#8fa89b" />
            <stop offset=".22" stopColor="#eef6ef" />
            <stop offset="1" stopColor="#7d938c" />
          </linearGradient>
        </defs>
        <ellipse cx="65" cy="190" rx="40" ry="7" fill="#01201c" opacity=".5" />
        <path d="M40 60V48c0-7 5-12 12-12h13c8 0 13 6 13 13v11Z" fill="url(#gCOPc)" />
        <path d="M65 37c11-1 19 3 25 10 3 4 2 9-2 10l-20 3Z" fill="#cfdcd2" />
        <path d="M14 44h27v9H19c-4 0-6-2-6-4s1-5 1-5Z" fill="#cfdcd2" />
        <path d="M44 52c-7 3-11 9-10 16 1 6 5 10 12 10v-6c-4 0-6-2-6-5s2-6 5-7Z" fill="#cfdcd2" />
        <rect x="38" y="56" width="42" height="7" rx="3" fill="#a8bdb2" />
        <rect x="41" y="62" width="36" height="16" rx="4" fill="url(#gCOPc)" />
        <path d="M28 96c0-11 6-18 15-24v-8h33v8c9 6 15 13 15 24v62c0 12-8 20-21 20H49c-13 0-21-8-21-20Z" fill="url(#gCOPb)" stroke="rgba(255,255,255,.4)" strokeWidth="1.4" />
        <rect x="31" y="112" width="66" height="60" rx="6" fill="url(#gCOPl)" />
        <rect x="31" y="112" width="66" height="60" rx="6" fill="none" stroke="rgba(236,230,247,.26)" strokeWidth="1" />
        <g transform="translate(58 120) scale(.5)" fill="none" stroke="#f0a03c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21c0-6.5 3.5-11 8-12.5C20 15 16.5 20 12 21Z" />
          <path d="M12 21C12 14.5 8.5 10 4 8.5 4 15 7.5 20 12 21Z" />
        </g>
        <text x="64" y="140" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="8.6" fontWeight="800" letterSpacing=".7" fill="#faf7fd">PURELANE</text>
        <line x1="42" y1="146" x2="86" y2="146" stroke="#f0a03c" strokeWidth=".9" opacity=".85" />
        <text x="64" y="156" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6.4" fontWeight="700" letterSpacing="1.1" fill="#ece6f7">COPPER BRASS</text>
        <text x="64" y="164" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6.4" fontWeight="700" letterSpacing="1.1" fill="#ece6f7">& BRONZE</text>
        <text x="64" y="171" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="4.8" fontWeight="600" letterSpacing=".9" fill="rgba(236,230,247,.7)">300 ML</text>
        <rect x="36" y="98" width="6" height="72" rx="3" fill="#ffffff" opacity=".3" />
        <rect x="86" y="102" width="4" height="64" rx="2" fill="#ffffff" opacity=".18" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 130 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tb" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity=".12" />
          <stop offset=".2" stopColor="#ffffff" stopOpacity=".4" />
          <stop offset=".54" stopColor="#dff3e4" stopOpacity=".10" />
          <stop offset="1" stopColor="#9fc7b4" stopOpacity=".32" />
        </linearGradient>
        <linearGradient id="tl" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#04756e" />
          <stop offset=".55" stopColor="#4b3a8f" />
          <stop offset="1" stopColor="#013f3d" />
        </linearGradient>
        <linearGradient id="tc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8fa89b" />
          <stop offset=".24" stopColor="#eef6ef" />
          <stop offset="1" stopColor="#7d938c" />
        </linearGradient>
      </defs>
      <ellipse cx="65" cy="190" rx="42" ry="7" fill="#01201c" opacity=".5" />
      <rect x="30" y="46" width="70" height="20" rx="7" fill="url(#tc)" />
      <ellipse cx="65" cy="46" rx="35" ry="8" fill="#f2f8f2" />
      <path d="M28 66h74v100c0 11-8 18-20 18H48c-12 0-20-7-20-18Z" fill="url(#tb)" stroke="rgba(255,255,255,.4)" strokeWidth="1.4" />
      <rect x="31" y="96" width="68" height="62" rx="6" fill="url(#tl)" />
      <rect x="31" y="96" width="68" height="62" rx="6" fill="none" stroke="rgba(236,230,247,.26)" strokeWidth="1" />
      <g transform="translate(58 104) scale(.5)" fill="none" stroke="#f0a03c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21c0-6.5 3.5-11 8-12.5C20 15 16.5 20 12 21Z" />
        <path d="M12 21C12 14.5 8.5 10 4 8.5 4 15 7.5 20 12 21Z" />
      </g>
      <text x="65" y="124" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="8.6" fontWeight="800" letterSpacing=".7" fill="#faf7fd">PURELANE</text>
      <line x1="43" y1="130" x2="87" y2="130" stroke="#f0a03c" strokeWidth=".9" opacity=".85" />
      <text x="65" y="140" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6.4" fontWeight="700" letterSpacing="1.1" fill="#ece6f7">WASHING MC</text>
      <text x="65" y="148" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6.4" fontWeight="700" letterSpacing="1.1" fill="#ece6f7">DESCALER</text>
      <text x="65" y="155" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="4.8" fontWeight="600" letterSpacing=".9" fill="rgba(236,230,247,.7)">8 TABLETS</text>
      <rect x="36" y="76" width="6" height="80" rx="3" fill="#ffffff" opacity=".3" />
      <rect x="88" y="82" width="4" height="70" rx="2" fill="#ffffff" opacity=".18" />
    </svg>
  )
}

export default function ProductCard({ product }) {
  const isSvg = product.image.startsWith('svg-')

  return (
    <Reveal as="article" className="glass card" delay={product.delay}>
      <div className="shot">
        <span className="pill">{product.pill}</span>
        {isSvg ? (
          <ProductSvg type={product.image} />
        ) : (
          <span className={`pimg ${product.image}`} role="img" aria-label={product.imageLabel} />
        )}
      </div>
      <h4>{product.name}</h4>
      <div className="rate">
        <b>★ {product.rating}</b> · {product.reviews} reviews
      </div>
      <div className="pr">
        <strong>{product.price}</strong>
        <s>{product.originalPrice}</s>
        <em>{product.discount}</em>
      </div>
      <button type="button" className="btn btn-ghost btn-sm">
        Add to cart
      </button>
    </Reveal>
  )
}
