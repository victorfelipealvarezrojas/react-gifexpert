export  const getGis = async (category) => {
    const Url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Z0Lh5mIyOu4glSeWdRPh04jvgTSBbYPh`;
    const Res = await fetch(Url);
    const { data } = await Res.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}
