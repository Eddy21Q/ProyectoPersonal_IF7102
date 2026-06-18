let portfolioDataPromise

export const getPortfolioData = () => {
  if (!portfolioDataPromise) {
    portfolioDataPromise = fetch(`${import.meta.env.BASE_URL}data/data.json`).then((response) => {
      if (!response.ok) {
        throw new Error('No se pudo cargar la informacion del portafolio.')
      }

      return response.json()
    })
  }

  return portfolioDataPromise
}
