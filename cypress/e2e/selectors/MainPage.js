class MainPage {
  search = {
    input: 'input[type="text"]',
  }

  tracklist = {
    trackTitles: '#tracklist div:nth-child(2) > p',
  }

  playlist = {
    title: '#playlist > .MuiBox-root > p',
    trackTitles: '#playlist div:nth-child(2) > p',
  }
}

export default new MainPage()
