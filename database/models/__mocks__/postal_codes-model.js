const findByPostalCode = jest.fn(postal_code => {
  if (postal_code) {
    return {
      id: 2,
      postal_code: "85012",
      latitude: 33.49929529525238,
      longitude: -112.07111768538415
    };
  } else {
    return undefined;
  }
});

const add = jest.fn(processedPostal => {
  return {
    id: 2,
    postal_code: "85012",
    latitude: 33.49929529525238,
    longitude: -112.07111768538415
  };
});

module.exports = PostalCodes = {
  findByPostalCode,
  add
};
