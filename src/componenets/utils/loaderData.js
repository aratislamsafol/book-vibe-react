export const loaderData = (api) => {
  return async () => {
    const response = await fetch(api);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  };
};