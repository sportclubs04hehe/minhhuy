const christmasCookies = [
    "Hello Christmas",
   ]
   exports.getchristmasFortune= () => {
    const idx =
   Math.floor(Math.random()*christmasCookies.length)
    return christmasCookies[idx]
   }
