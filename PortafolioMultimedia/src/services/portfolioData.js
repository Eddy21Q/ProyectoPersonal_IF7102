let portfolioDataPromise

export const getPortfolioData = () => {
  if (!portfolioDataPromise) {
    portfolioDataPromise = fetch('/data/data.json').then((response) => {
      if (!response.ok) {
        throw new Error('No se pudo cargar la informacion del portafolio.')
      }

      return response.json()
    })
  }

  return portfolioDataPromise
}
