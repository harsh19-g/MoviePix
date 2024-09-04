
//ye ek function h aur hm function ko export kra rhe h

export const getAPIData = async () => {
  try {
    const res = await fetch(
      `https://omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=batman`
    );
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
