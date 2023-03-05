/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
        fontSize: {
            'text-xs': ['0.75rem', '1.125rem'],
            'text-sm': ['0.875rem', '1.25rem'],
            'text-md': ['1rem', '1.5rem'],
            'text-lg': ['1.125rem', '1.75rem'],
            'text-xl': ['1.25rem', '1.875rem'],
            'display-xs': ['1.5rem', '2rem'],
            'display-sm': ['1.875rem', '2.375rem'],
            'display-md': ['2.25rem', '2.75rem'],
            'display-lg': ['3rem', '3.75rem'],
            'display-xl': ['3.75rem', '4.5rem'],
        },
        extend: {
            backgroundImage:{
              'signup':"url('https://www.themoviedb.org/t/p/original/62HCnUTziyWcpDaBO2i1DX17ljH.jpg')"
            },
            colors:{
            warning: {
                '25': '#fffcf5',
                '50': '#fffaeb',
                '100': '#fef0c7',
                '200': '#fedf89',
                '300': '#fec84b',
                '400': '#fdb022',
                '500': '#f79009',
                '600': '#dc6803',
                '700': '#b54708',
                '800': '#93370d',
                '900': '#7a2e0e',
            },
            primary: {
                '25': '#cdd1d9',
                '50': '#9ba3b3',
                '100': '#6a768c',
                '200': '#515f79',
                '300': '#384866',
                '400': '#1f3153',
                '500': '#061a40',
                '600': '#05173a',
                '700': '#051533',
                '800': '#04122d',
                '900': '#041026',
            },
            gray: {
                '25': '#fcfcfd',
                '50': '#f9fafb',
                '100': '#f2f4f7',
                '200': '#eaecf0',
                '300': '#d0d5dd',
                '400': '#98a2b3',
                '500': '#667085',
                '600': '#475467',
                '700': '#344054',
                '800': '#1d2939',
                '900': '#101828',
            },
            }

        },
    },
    plugins: [],
}
