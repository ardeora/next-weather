import { revalidatePath } from "next/cache";
import { getTemperature } from "./actions";
import Temperature from "./Weather";
import { redirect } from "next/navigation";

export default async function Home({ searchParams }: any) {
  const cityName = searchParams.city || "";
  const temperature = await getTemperature(cityName);

  const handleSubmit = async (formData: FormData) => {
    "use server";
    const cityName = formData.get("cityName");
    redirect("/?city=" + cityName);
  };

  return (
    <>
      <h2>Weather</h2>
      <form action={handleSubmit}>
        <input name="cityName" placeholder="City name" />
        <button type="submit">Check Weather</button>
      </form>
      {temperature && (
        <Temperature temperature={temperature} cityName={cityName} />
      )}
    </>
  );
}
