export const URL = "https://challenge.thef2e.com/api/thef2e2019/stage6/rooms";

export const token =
  "Bearer IAlFGuHujADexllpJHWL1MenPYbizgbL00yxoV8wLs9zfZxS4hgs0wVo6E6b";

interface HomePageProps {
  "id" : string,
  "imageUrl" : string,
  "normalDayPrice": number,
  "holidayPrice" : number,
  "name" : string
}

export async function getStaticProps() {
  const res = await fetch(URL);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
