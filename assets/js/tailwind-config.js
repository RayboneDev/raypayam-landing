tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Vazirmatn', 'sans-serif'],
            },
            colors: {
                midnight: '#0B131F',
                navyDark: '#111C2E',
                navyCard: '#18263E',
                cyanGlow: '#00C897',
                cyanAccent: '#00A8CC',
                royalBlue: '#2563EB',
                emeraldGlow: '#10B981',
                coralRed: '#EF4444',
                amberWarning: '#F59E0B',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 9s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 3s infinite',
                'scanline': 'scanline 2.5s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-15px) rotate(1deg)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
                    '50%': { opacity: 0.8, transform: 'scale(1.05)' },
                },
                scanline: {
                    '0%': { top: '0%' },
                    '100%': { top: '100%' }
                }
            }
        }
    }
}