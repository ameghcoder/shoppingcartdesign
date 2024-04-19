/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors:{
        q_background_clr: 'rgb(var(--bg-clr) / <alpha-value>)',
        q_surface_clr: 'rgb(var(--sr-clr) / <alpha-value>)',
        q_tx_clr: 'rgb(var(--tx-clr) / <alpha-value>)',
        q_br_clr: 'rgb(var(--br-clr) / <alpha-value>)',
        q_primary_clr: 'rgb(var(--primary-clr) / <alpha-value>)',
        q_secondary_1_clr: 'rgb(var(--secondary-clr-1) / <alpha-value>)',
        q_secondary_2_clr: 'rgb(var(--secondary-clr-2) / <alpha-value>)',
        q_success_clr: 'rgb(var(--success-clr) / <alpha-value>)',
        q_warning_clr: 'rgb(var(--warning-clr) / <alpha-value>)',
        q_error_clr: 'rgb(var(--error-clr) / <alpha-value>)',
        q_info_clr: 'rgb(var(--info-clr) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}

