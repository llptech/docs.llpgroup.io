async function checkPageExists(address) {
  const response = await fetch(address, {
    method: 'HEAD',
    cache: 'no-cache'
  });
  return response.status === 200;
}
