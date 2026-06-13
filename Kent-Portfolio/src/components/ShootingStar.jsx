export default function ShootingStar() {
    return (
        <div className="shooting-star" aria-hidden="true" style={SHOOTING_STAR_STYLE}>
            <span style={SHOOTING_HEAD_STYLE} />
            <span style={SHOOTING_TAIL_STYLE} />
        </div>
    );
}

const SHOOTING_STAR_STYLE = {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    pointerEvents: 'none',
};

const SHOOTING_HEAD_STYLE = {
    position: 'absolute',
    left: '68%',
    top: '24%',
    width: '5px',
    height: '5px',
    borderRadius: '999px',
    background: '#ffffff',
    boxShadow: '0 0 14px rgba(255, 255, 255, 0.95), 0 0 28px rgba(121, 216, 255, 0.75)',
};

const SHOOTING_TAIL_STYLE = {
    position: 'absolute',
    left: 'calc(68% - 96px)',
    top: 'calc(24% + 2px)',
    width: '96px',
    height: '2px',
    borderRadius: '999px',
    background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(155,231,255,0.15), rgba(255,255,255,0.95))',
    transform: 'rotate(-22deg)',
    transformOrigin: 'right center',
    filter: 'blur(0.2px)',
    opacity: 0.95,
};
