const tetCookies = [
    "Hello TeT",
   ]
   exports.gettetFortune= () => {
    const idx =
   Math.floor(Math.random()*tetCookies.length)
    return tetCookies[idx]
   }
