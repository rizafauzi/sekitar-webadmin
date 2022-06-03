module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green90: '#0e3124',
        green80: '#00764a',
        green60: '#008f59',
        green50: '#00ab6b',
        green40: '#52c41a',
        green30: '#2eba86',
        green20: '#b8e8d5',
        green10: '#e6f7f0',

        darkGreen: '#0a573a',

        cobalt70: '#1b5b88',
        cobalt60: '#1e6699',
        cobalt50: '#2479b4',
        cobalt30: '#66ade1',
        cobalt10: '#aad2ee',

        violet70: '#5b257e',
        violet60: '#712e9e',
        violet50: '#9343c8',
        violet30: '#bf90df',
        violet10: '#ecd7fa',

        olive70: '#64772c',
        olive60: '#7d9537',
        olive50: '#94b041',
        olive30: '#b8cd79',
        olive10: '#d0dea6',

        yellow50: '#ffdd00',
        yellow30: '#ffef8a',

        blue90: '#162732',
        blue70: '#2378a9',
        blue60: '#2a90cb',
        blue50: '#2479b4',
        blue30: '#aad5ee',
        blue20: '#2479b4',
        blue10: '#e9f2f8',

        peach70: '#dc2f18',
        peach60: '#e94a35',
        peach50: '#ed7161',
        peach30: '#f5ada3',
        peach10: '#fbdeda',

        brown70: '#6f5234',
        brown60: '#8b6641',
        brown50: '#a97c50',
        brown30: '#d1b89e',
        brown10: '#f2ebe3',

        black: '#333',
        white: '#fff',
        grey70: '#6f6d6b',
        grey60: '#949494',
        grey50: '#b5b5b5',
        grey40: '#969696',
        grey30: '#cecece',
        grey20: '#ededed',
        grey15: '#dbdbdb',
        grey10: '#cbcbcb',

        dark80: '#131313',
        dark60: '#191a19',

        red90: '#3e1d1d',
        red55: '#ff4d4f',
        red50: '#ee4a49',
        red30: '#3e1d1d',
        red20: '#ee4a49',
        red10: '#fbdeda',

        orange90: '#402c14',
        orange50: '#f5931b',
        orange30: '#402c14',
        orange20: '#f5931b',
        orange10: '#fef4e8',

        neutral85: '#121212',
        neutral80: '#171717',
        neutral75: '#1c1c1c',
        neutral70: '#1f1f1f',
        neutral65: '#232323',
        neutral60: '#2a2a2a',
        neutral55: '#2e2e2e',
        neutral50: '#333333',
        neutral45: '#3b3b3b',
        neutral40: '#414141',
        neutral35: '#747474',
        neutral30: '#969696',
        neutral25: '#b5b5b5',
        neutral20: '#c4c4c4',
        neutral15: '#cbcbcb',
        neutral10: '#ededed',
        neutral5: '#f6f6f6',
        neutral0: '#f1f1f1',

        darkgrey90: '#121212',
        darkgrey80: '#171717',
        darkgrey75: '#1a1a1a',
        darkgrey70: '#1c1c1c',
        darkgrey60: '#1d1d1d',
        darkgrey50: '#1f1f1f',
        darkgrey45: '#2a2a2a',
        darkgrey40: '#2e2e2e',
        darkgrey30: '#333333',
        darkgrey25: '#3b3b3b',
        darkgrey15: '#5e5e5e',
        darkgrey10: '#414141',

        /* Variable Gradient color */
        gradientLight:
          'linear-gradient(180deg, rgba(230, 247, 240, 0.35) -14.72%, rgba(230, 247, 240, 0.3) 34.81%, rgba(230, 247, 240, 0.25) 84.47%, rgba(230, 247, 240, 0) 114.78%)',
        gradientDark:
          'linear-gradient(180deg, rgba(14, 49, 36, 0.35) -17.41%, rgba(14, 49, 36, 0.3) 39.27%, rgba(14, 49, 36, 0.25) 82.13%, rgba(14, 49, 36, 0) 117.79%'
      },
      backgroundColors: {
        green90: '#0e3124',
        green80: '#00764a',
        green60: '#008f59',
        green50: '#00ab6b',
        green40: '#52c41a',
        green30: '#2eba86',
        green20: '#b8e8d5',
        green10: '#e6f7f0',

        darkGreen: '#0a573a',

        cobalt70: '#1b5b88',
        cobalt60: '#1e6699',
        cobalt50: '#2479b4',
        cobalt30: '#66ade1',
        cobalt10: '#aad2ee',

        violet70: '#5b257e',
        violet60: '#712e9e',
        violet50: '#9343c8',
        violet30: '#bf90df',
        violet10: '#ecd7fa',

        olive70: '#64772c',
        olive60: '#7d9537',
        olive50: '#94b041',
        olive30: '#b8cd79',
        olive10: '#d0dea6',

        yellow50: '#ffdd00',
        yellow30: '#ffef8a',

        blue90: '#162732',
        blue70: '#2378a9',
        blue60: '#2a90cb',
        blue50: '#2479b4',
        blue30: '#aad5ee',
        blue20: '#2479b4',
        blue10: '#e9f2f8',

        peach70: '#dc2f18',
        peach60: '#e94a35',
        peach50: '#ed7161',
        peach30: '#f5ada3',
        peach10: '#fbdeda',

        brown70: '#6f5234',
        brown60: '#8b6641',
        brown50: '#a97c50',
        brown30: '#d1b89e',
        brown10: '#f2ebe3',

        black: '#333',
        white: '#fff',
        grey70: '#6f6d6b',
        grey60: '#949494',
        grey50: '#b5b5b5',
        grey40: '#969696',
        grey30: '#cecece',
        grey20: '#ededed',
        grey15: '#dbdbdb',
        grey10: '#f9f9f9',

        dark80: '#131313',
        dark60: '#191a19',

        red90: '#3e1d1d',
        red55: '#ff4d4f',
        red50: '#ee4a49',
        red30: '#3e1d1d',
        red20: '#ee4a49',
        red10: '#fbdeda',

        orange90: '#402c14',
        orange50: '#f5931b',
        orange30: '#402c14',
        orange20: '#f5931b',
        orange10: '#fef4e8',

        neutral85: '#121212',
        neutral80: '#171717',
        neutral75: '#1c1c1c',
        neutral70: '#1f1f1f',
        neutral65: '#232323',
        neutral60: '#2a2a2a',
        neutral55: '#2e2e2e',
        neutral50: '#333333',
        neutral45: '#3b3b3b',
        neutral40: '#414141',
        neutral35: '#747474',
        neutral30: '#969696',
        neutral25: '#b5b5b5',
        neutral20: '#c4c4c4',
        neutral15: '#cbcbcb',
        neutral10: '#ededed',
        neutral5: '#f6f6f6',
        neutral0: '#f1f1f1',

        darkgrey90: '#121212',
        darkgrey80: '#171717',
        darkgrey75: '#1a1a1a',
        darkgrey70: '#1c1c1c',
        darkgrey60: '#1d1d1d',
        darkgrey50: '#1f1f1f',
        darkgrey45: '#2a2a2a',
        darkgrey40: '#2e2e2e',
        darkgrey30: '#333333',
        darkgrey25: '#3b3b3b',
        darkgrey15: '#5e5e5e',
        darkgrey10: '#414141',

        /* Variable Gradient color */
        gradientLight:
          'linear-gradient(180deg, rgba(230, 247, 240, 0.35) -14.72%, rgba(230, 247, 240, 0.3) 34.81%, rgba(230, 247, 240, 0.25) 84.47%, rgba(230, 247, 240, 0) 114.78%)',
        gradientDark:
          'linear-gradient(180deg, rgba(14, 49, 36, 0.35) -17.41%, rgba(14, 49, 36, 0.3) 39.27%, rgba(14, 49, 36, 0.25) 82.13%, rgba(14, 49, 36, 0) 117.79%'
      },
      gridTemplateColumns: {
        detail: '40% 60%'
      },
      maxWidth: {
        20: '80px'
      }
    },
    fontFamily: {
      'open-sans': ['"Open Sans"'],
      lato: ['"Lato"'],
      'noto-sans': ['"Noto Sans"']
    },
    gridTemplateColumns: {
      document: '40% 60%'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
