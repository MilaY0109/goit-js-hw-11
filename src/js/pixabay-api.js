const searchParams = {
  key: '42386647-98f841b623ea7dc572c802671',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export async function fetchImage(query) {
  searchParams.q = query;
  const urlparams = new URLSearchParams(searchParams);
  const response = await fetch(`https://pixabay.com/api/?${urlparams}`);
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  return response.json();
}
