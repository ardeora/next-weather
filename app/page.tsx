import { revalidatePath } from "next/cache";
import { getTemperature } from "./actions";
import Temperature from "./Weather";
import { redirect } from "next/navigation";

export default async function Home({ searchParams }: any) {
  const cityName = searchParams.city || "";
  const temperature = await getTemperature(cityName);

  return (
    <>
      <h2>Weather</h2>
      <form>
        <input name="city" placeholder="City name" />
        <button type="submit">Check Weather</button>
      </form>
      {temperature && (
        <Temperature temperature={temperature} cityName={cityName} />
      )}
    </>
  );
}
