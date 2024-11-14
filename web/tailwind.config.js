/** @type {import('tailwindcss').Config} */

import animated from "tailwindcss-animated";
import animate from "tailwindcss-animate";
const plugin = require('tailwindcss/plugin')
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px'
    },
    extend: {
      scale: {
        80: '0.8'
      },
      padding: {
        90: '360px'
      },
      margin: {
        90: '360px'
      },
      width: {
        35: '140px',
        42: '168px',
        46: '184px',
        50: '200px',
        82: '328px',
        84: '336px',
        90: '360px',
        99: '396px',
        106: '424px',
        110: '440px',
        125: '500px',
        137: '548px',
        141: '564px',
        148: '592px',
        152: '608px',
        160: '640px',
        170: '680px',
        200: '800px',
        243: '972px'
      },
      maxWidth: {
        243: '972px'
      },
      height: {
        42: '168px',
        46: '184px',
        50: '200px',
        62.5: '250px',
        87: '348px',
        91: '364px',
        39: '156px'
      },
      minHeight: {
        62.5: '250px',
        87: '348px',
        91: '364px'
      },
      size: {
        42: '168px',
        46: '184px',
        50: '200px',
        62.5: '250px',
        87: '348px',
        91: '364px',
        39: '156px'
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        '3xl': '0px 0px 25px 2px rgba(0, 0, 0, 0.3)',
        thin: '0px 0px 3px 0.5px rgba(0, 0, 0, 0.2)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(180deg)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spint-once': 'spin 0.4s linear 1'
      }
    }
  },
  plugins: [
    animated,
    animate,
    plugin(function ({ addVariant }) {
      addVariant('children', '&>*')
    })
  ]
}
