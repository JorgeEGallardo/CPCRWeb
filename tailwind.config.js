module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        'landing-background':
              'linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url(https://images.unsplash.com/photo-1596213314331-2e9fa817a69c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
           }),
  },
  },
  plugins: [],
}