export const exerciseOptions =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e2cbd737c1msh77dc830d28c724dp197c09jsn5e7ba9d12c3c',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',

    headers: {
      'X-RapidAPI-Key': 'e2cbd737c1msh77dc830d28c724dp197c09jsn5e7ba9d12c3c',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async ( url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}