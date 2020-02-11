const mockResponseData = {
  info: {
    statuscode: 0,
    copyright: {
      text: "© 2020 MapQuest, Inc.",
      imageUrl: "http://api.mqcdn.com/res/mqlogo.gif",
      imageAltText: "© 2020 MapQuest, Inc."
    },
    messages: []
  },
  options: {
    maxResults: 1,
    thumbMaps: true,
    ignoreLatLngInput: false
  },
  results: [
    {
      providedLocation: {
        latLng: {
          lat: 38.6705692,
          lng: -121.36558769999999
        }
      },
      locations: [
        {
          street: "5745 Hamilton St",
          adminArea6: "",
          adminArea6Type: "Neighborhood",
          adminArea5: "Sacramento",
          adminArea5Type: "City",
          adminArea4: "Sacramento",
          adminArea4Type: "County",
          adminArea3: "CA",
          adminArea3Type: "State",
          adminArea1: "US",
          adminArea1Type: "Country",
          postalCode: "95842",
          geocodeQualityCode: "L1AAA",
          geocodeQuality: "ADDRESS",
          dragPoint: false,
          sideOfStreet: "L",
          linkId: "0",
          unknownInput: "",
          type: "s",
          latLng: {
            lat: 38.670557,
            lng: -121.36436
          },
          displayLatLng: {
            lat: 38.670557,
            lng: -121.36436
          },
          mapUrl:
            "http://www.mapquestapi.com/staticmap/v5/map?key=N3K6psBvKbAeSLuT2B2RGSXQQH6oYkI9&type=map&size=225,160&locations=38.67055659375996,-121.36435985222012|marker-sm-50318A-1&scalebar=true&zoom=15&rand=-2099470265"
        }
      ]
    }
  ]
};

const mockLocation = {
  street: "5745 Hamilton St",
  adminArea6: "",
  adminArea6Type: "Neighborhood",
  adminArea5: "Sacramento",
  adminArea5Type: "City",
  adminArea4: "Sacramento",
  adminArea4Type: "County",
  adminArea3: "CA",
  adminArea3Type: "State",
  adminArea1: "US",
  adminArea1Type: "Country",
  postalCode: "95842",
  geocodeQualityCode: "L1AAA",
  geocodeQuality: "ADDRESS",
  dragPoint: false,
  sideOfStreet: "L",
  linkId: "0",
  unknownInput: "",
  type: "s",
  latLng: {
    lat: 38.670557,
    lng: -121.36436
  },
  displayLatLng: {
    lat: 38.670557,
    lng: -121.36436
  },
  mapUrl:
    "http://www.mapquestapi.com/staticmap/v5/map?key=N3K6psBvKbAeSLuT2B2RGSXQQH6oYkI9&type=map&size=225,160&locations=38.67055659375996,-121.36435985222012|marker-sm-50318A-1&scalebar=true&zoom=15&rand=-2099470265"
};

const mockPostalDataReduced = {
  postal_code: "95842",
  latitude: 38.670557,
  longitude: -121.36436
};

module.exports = {
  mockLocation,
  mockPostalDataReduced,
  mockResponseData
};
