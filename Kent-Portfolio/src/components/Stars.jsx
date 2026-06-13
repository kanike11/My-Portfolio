const STAR_POSITIONS = [
    { left: '8%', top: '18%', size: 2, opacity: 0.9 },
    { left: '14%', top: '42%', size: 1.5, opacity: 0.7 },
    { left: '22%', top: '12%', size: 2.5, opacity: 0.85 },
    { left: '31%', top: '28%', size: 1.75, opacity: 0.75 },
    { left: '39%', top: '16%', size: 2.25, opacity: 0.95 },
    { left: '47%', top: '8%', size: 1.5, opacity: 0.65 },
    { left: '56%', top: '24%', size: 2, opacity: 0.8 },
    { left: '63%', top: '40%', size: 1.5, opacity: 0.72 },
    { left: '71%', top: '14%', size: 2.75, opacity: 0.88 },
    { left: '79%', top: '32%', size: 1.75, opacity: 0.7 },
    { left: '87%', top: '20%', size: 2.2, opacity: 0.9 },
    { left: '91%', top: '48%', size: 1.5, opacity: 0.62 },
    { left: '11%', top: '68%', size: 2.2, opacity: 0.78 },
    { left: '24%', top: '76%', size: 1.75, opacity: 0.7 },
    { left: '35%', top: '64%', size: 2.5, opacity: 0.92 },
    { left: '44%', top: '82%', size: 1.5, opacity: 0.6 },
    { left: '52%', top: '70%', size: 2, opacity: 0.82 },
    { left: '60%', top: '58%', size: 1.5, opacity: 0.68 },
    { left: '68%', top: '78%', size: 2.4, opacity: 0.86 },
    { left: '76%', top: '66%', size: 1.6, opacity: 0.64 },
    { left: '84%', top: '74%', size: 2.1, opacity: 0.84 },
    { left: '94%', top: '62%', size: 1.4, opacity: 0.58 },
];

export default function Stars() {
    return (
        <div className="stars" aria-hidden="true" style={STAR_FIELD_STYLE}>
            {STAR_POSITIONS.map((star, index) => (
                <span
                    key={`${star.left}-${star.top}-${index}`}
                    style={{
                        position: 'absolute',
                        left: star.left,
                        top: star.top,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        borderRadius: '999px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        boxShadow: '0 0 8px rgba(155, 231, 255, 0.8)',
                        opacity: star.opacity,
                    }}
                />
            ))}
        </div>
    );
}

const STAR_FIELD_STYLE = {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    pointerEvents: 'none',
};