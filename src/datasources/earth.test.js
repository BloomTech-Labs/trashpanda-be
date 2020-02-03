require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const gql = require('graphql-tag');
const typeDefs = require("../schema");
const {createTestClient} = require('apollo-server-testing');

const mockMaterials = require("./mockResponses")

const Earth911 = require('../datasources/earth')

const { RESTDataSource } = require("apollo-datasource-rest");

const initializeFetch = new RESTDataSource()


//Mocking client
const materials = gql`
query mock {
        materials{
            material_id
        }
  }
`

describe('testing typeDefs', () => {

  it('queries mock server using typeDefs and returns variables asked for - only material_ids', async () => {
    //mock the datasource
    let earthAPI =  mockMaterials
    //Mocking resolvers
    const resolvers = {
        Query:{
            materials: async () => {
              //console.log(earthAPI)
                return earthAPI.mockMaterials
            }
        }
    }

    //Mocking server
    const server = new ApolloServer({
      //TESTING typedefs
        typeDefs,
        resolvers,
    })

    const {query} = createTestClient(server)

    const res = await query({query: materials})
    //console.log(res.data.materials)

     expect(res.data.materials).toEqual([{"material_id": 1}, {"material_id": 2}]);
  });
});

  describe('materialReducer in earth datasource', () => {
    let dataearthAPI = new Earth911();
    it('reduces mock materials using materialReducer', async () => {

     
      const binInfo = mockMaterials
      const res = dataearthAPI.materialReducer(binInfo.mockMaterials[1], binInfo.mockMaterials[0])
  
       expect(res).toEqual({
        id: 1,
        description: "hlkhol",
        material_id: 1,
        long_description: "butter",
        bin_trash: false,
        bin_recycle: false,
        bin_compost: false
      });


    });
  });

  describe('getAllMaterials in earth datasource', () => {
    it('calls earth911 api to get all materials and receives an array', async () => {
      let dataearthAPI = new Earth911()

      //if you are using a class outside of the Apollo server context you need to initialize it yourself (like below)
      dataearthAPI.initialize({})
      //Mocking resolvers
      const resolvers = {
          Query:{
              materials: async () => {
                 //TESTING the datasource Fetch methods
                  return dataearthAPI.getAllMaterials()
              }
          }
      }
      
      //Mocking server
      const server = new ApolloServer({
        //TESTING typedefs
          typeDefs,
          resolvers,
          dataearthAPI: new Earth911()
      })
  
      const {query} = createTestClient(server)
  
      const res = await query({query: materials})

       expect(res.data.materials).toEqual([{"material_id": 445}, {"material_id": 60}, {"material_id": 446}, {"material_id": 447}, {"material_id": 449}, {"material_id": 450}, {"material_id": 448}, {"material_id": 93}, {"material_id": 455}, {"material_id": 619}, {"material_id": 452}, {"material_id": 413}, {"material_id": 62}, {"material_id": 61}, {"material_id": 454}, {"material_id": 456}, {"material_id": 63}, {"material_id": 457}, {"material_id": 458}, {"material_id": 708}, {"material_id": 429}, {"material_id": 64}, {"material_id": 461}, {"material_id": 463}, {"material_id": 464}, {"material_id": 65}, {"material_id": 361}, {"material_id": 465}, {"material_id": 466}, {"material_id": 467}, {"material_id": 468}, {"material_id": 355}, {"material_id": 470}, {"material_id": 66}, {"material_id": 472}, {"material_id": 621}, {"material_id": 471}, {"material_id": 473}, {"material_id": 68}, {"material_id": 475}, {"material_id": 477}, {"material_id": 67}, {"material_id": 478}, {"material_id": 476}, {"material_id": 503}, {"material_id": 187}, {"material_id": 353}, {"material_id": 121}, {"material_id": 521}, {"material_id": 591}, {"material_id": 104}, {"material_id": 70}, {"material_id": 235}, {"material_id": 435}, {"material_id": 434}, {"material_id": 436}, {"material_id": 607}, {"material_id": 437}, {"material_id": 194}, {"material_id": 3}, {"material_id": 363}, {"material_id": 196}, {"material_id": 212}, {"material_id": 485}, {"material_id": 219}, {"material_id": 275}, {"material_id": 422}, {"material_id": 505}, {"material_id": 134}, {"material_id": 525}, {"material_id": 647}, {"material_id": 255}, {"material_id": 430}, {"material_id": 657}, {"material_id": 423}, {"material_id": 643}, {"material_id": 108}, {"material_id": 231}, {"material_id": 683}, {"material_id": 210}, {"material_id": 561}, {"material_id": 76}, {"material_id": 431}, {"material_id": 232}, {"material_id": 127}, {"material_id": 481}, {"material_id": 585}, {"material_id": 563}, {"material_id": 4}, {"material_id": 368}, {"material_id": 425}, {"material_id": 217}, {"material_id": 118}, {"material_id": 651}, {"material_id": 398}, {"material_id": 270}, {"material_id": 507}, {"material_id": 641}, {"material_id": 147}, {"material_id": 244}, {"material_id": 482}, {"material_id": 245}, {"material_id": 215}, {"material_id": 333}, {"material_id": 364}, {"material_id": 583}, {"material_id": 117}, {"material_id": 100}, {"material_id": 693}, {"material_id": 77}, {"material_id": 432}, {"material_id": 83}, {"material_id": 414}, {"material_id": 483}, {"material_id": 615}, {"material_id": 203}, {"material_id": 385}, {"material_id": 132}, {"material_id": 663}, {"material_id": 378}, {"material_id": 379}, {"material_id": 527}, {"material_id": 130}, {"material_id": 388}, {"material_id": 595}, {"material_id": 389}, {"material_id": 40}, {"material_id": 359}, {"material_id": 486}, {"material_id": 487}, {"material_id": 661}, {"material_id": 697}, {"material_id": 85}, {"material_id": 488}, {"material_id": 207}, {"material_id": 81}, {"material_id": 380}, {"material_id": 201}, {"material_id": 631}, {"material_id": 645}, {"material_id": 637}, {"material_id": 711}, {"material_id": 340}, {"material_id": 712}, {"material_id": 186}, {"material_id": 509}, {"material_id": 702}, {"material_id": 195}, {"material_id": 101}, {"material_id": 371}, {"material_id": 74}, {"material_id": 183}, {"material_id": 253}, {"material_id": 569}, {"material_id": 222}, {"material_id": 116}, {"material_id": 529}, {"material_id": 182}, {"material_id": 332}, {"material_id": 557}, {"material_id": 395}, {"material_id": 597}, {"material_id": 188}, {"material_id": 343}, {"material_id": 345}, {"material_id": 627}, {"material_id": 589}, {"material_id": 489}, {"material_id": 233}, {"material_id": 102}, {"material_id": 433}, {"material_id": 344}, {"material_id": 208}, {"material_id": 419}, {"material_id": 372}, {"material_id": 373}, {"material_id": 511}, {"material_id": 581}, {"material_id": 541}, {"material_id": 382}, {"material_id": 348}, {"material_id": 513}, {"material_id": 181}, {"material_id": 306}, {"material_id": 617}, {"material_id": 490}, {"material_id": 184}, {"material_id": 228}, {"material_id": 707}, {"material_id": 695}, {"material_id": 535}, {"material_id": 599}, {"material_id": 247}, {"material_id": 95}, {"material_id": 180}, {"material_id": 192}, {"material_id": 515}, {"material_id": 625}, {"material_id": 403}, {"material_id": 491}, {"material_id": 709}, {"material_id": 418}, {"material_id": 254}, {"material_id": 259}, {"material_id": 229}, {"material_id": 384}, {"material_id": 370}, {"material_id": 230}, {"material_id": 374}, {"material_id": 381}, {"material_id": 517}, {"material_id": 391}, {"material_id": 375}, {"material_id": 216}, {"material_id": 689}, {"material_id": 6}, {"material_id": 346}, {"material_id": 94}, {"material_id": 669}, {"material_id": 539}, {"material_id": 366}, {"material_id": 349}, {"material_id": 326}, {"material_id": 226}, {"material_id": 533}, {"material_id": 252}, {"material_id": 8}, {"material_id": 639}, {"material_id": 193}, {"material_id": 334}, {"material_id": 97}, {"material_id": 439}, {"material_id": 440}, {"material_id": 493}, {"material_id": 236}, {"material_id": 44}, {"material_id": 1}, {"material_id": 260}, {"material_id": 357}, {"material_id": 579}, {"material_id": 221}, {"material_id": 575}, {"material_id": 376}, {"material_id": 603}, {"material_id": 392}, {"material_id": 39}, {"material_id": 667}, {"material_id": 126}, {"material_id": 685}, {"material_id": 687}, {"material_id": 623}, {"material_id": 99}, {"material_id": 704}, {"material_id": 271}, {"material_id": 272}, {"material_id": 58}, {"material_id": 273}, {"material_id": 2}, {"material_id": 404}, {"material_id": 98}, {"material_id": 342}, {"material_id": 659}, {"material_id": 405}, {"material_id": 191}, {"material_id": 205}, {"material_id": 96}, {"material_id": 442}, {"material_id": 519}, {"material_id": 443}, {"material_id": 494}, {"material_id": 444}, {"material_id": 427}, {"material_id": 250}, {"material_id": 42}, {"material_id": 665}, {"material_id": 277}, {"material_id": 179}, {"material_id": 54}, {"material_id": 190}, {"material_id": 396}, {"material_id": 531}, {"material_id": 567}, {"material_id": 593}, {"material_id": 354}, {"material_id": 655}, {"material_id": 537}, {"material_id": 699}, {"material_id": 677}, {"material_id": 500}, {"material_id": 523}, {"material_id": 189}, {"material_id": 214}, {"material_id": 543}, {"material_id": 577}, {"material_id": 495}, {"material_id": 653}, {"material_id": 145}, {"material_id": 605}, {"material_id": 496}, {"material_id": 649}, {"material_id": 553}, {"material_id": 369}, {"material_id": 257}, {"material_id": 386}, {"material_id": 706}, {"material_id": 258}, {"material_id": 545}, {"material_id": 397}, {"material_id": 565}, {"material_id": 213}, {"material_id": 377}, {"material_id": 409}, {"material_id": 547}, {"material_id": 671}, {"material_id": 362}, {"material_id": 197}, {"material_id": 410}, {"material_id": 185}, {"material_id": 80}, {"material_id": 679}, {"material_id": 73}, {"material_id": 438}, {"material_id": 211}, {"material_id": 609}, {"material_id": 341}, {"material_id": 571}, {"material_id": 356}, {"material_id": 635}, {"material_id": 497}, {"material_id": 246}, {"material_id": 484}, {"material_id": 358}, {"material_id": 387}, {"material_id": 5}, {"material_id": 549}, {"material_id": 79}, {"material_id": 224}, {"material_id": 587}, {"material_id": 629}, {"material_id": 220}, {"material_id": 107}, {"material_id": 256}, {"material_id": 415}, {"material_id": 633}, {"material_id": 498}, {"material_id": 611}, {"material_id": 402}, {"material_id": 499}, {"material_id": 408}, {"material_id": 492}, {"material_id": 267}, {"material_id": 675}, {"material_id": 673}, {"material_id": 223}, {"material_id": 399}, {"material_id": 573}, {"material_id": 412}, {"material_id": 411}, {"material_id": 234}, {"material_id": 441}, {"material_id": 559}, {"material_id": 218}, {"material_id": 204}, {"material_id": 352}, {"material_id": 206}, {"material_id": 407}, {"material_id": 551}, {"material_id": 146}, {"material_id": 78}, {"material_id": 421}, {"material_id": 681}, {"material_id": 613}, {"material_id": 710}, {"material_id": 691}]);


    });
  });
//   it('checks the first object to ensure materialReducer added properties from the internal db', async () => {
//     const res = await EarthAPI.getAllMaterials();
//     const testObj = {
        
//             id: 445,
//             description: "#1 Plastic Bags",
//             material_id: 445,
//             long_description: "Plastic bags are used to transport products or to seal foods. #1 Plastic bags may be difficult to recycle because they have limited markets.",
//             bin_trash: true,
//             bin_recycle: false,
//             bin_compost: false,
//             bin_special: false
//     }
//     expect(res[0]).toMatchObject(testObj);
//  });

// });

// describe('getAllFamilies in earth datasource', () => {

//     it('calls earth911 api to get all families and receives an array', async () => {
//        const res = await EarthAPI.getAllFamilies();
//        expect(res).isArray();
//     });
  
//     it('checks the first object to ensure familyReducer added properties from the internal db', async () => {
//       const res = await EarthAPI.getAllMaterials();
//       const testObj = {
//         material_ids: [
//             1,
//             2,
//             3,
//             4,
//             5,
//             260,
//             301,
//             308,
//             186,
//             188,
//             219,
//             95,
//             107,
//             108,
//             368,
//             275,
//             326,
//             267,
//             633,
//             369,
//             605,
//             543,
//             535,
//             597,
//             525
//             ],
//         family_id: 1,
//         description: "Automotive",
//         family_type_id: 1
//       }
//       expect(res[0]).toMatchObject(testObj);
//    });
  

//    describe('getAllLocations in earth datasource', () => {

//     it('calls earth911 api to get all locations and receives an array', async () => {
//         const coordinates = {
//             latitude: 28.725812016678955,
//             longitude: -81.576132
//         };

//        const res = await EarthAPI.getAllLocations(coordinates);
//        expect(res).isArray();
//     });


//         const location_id = "Q1RQNVJcX15KVA";

  
//     it('checks the first object to ensure locationReducer added properties from the internal db', async () => {
//       const coordinates = {
//             latitude: 28.725812016678955,
//             longitude: -81.576132
//         };
//       const res = await EarthAPI.getAllLocations(coordinates);
//       const testObj = {
//         curbside: false,
//         municipal: false,
//         description: "Advance Auto Parts",
//         longitude: -81.59709684420203,
//         latitude: 28.723233706600862,
//         address: "2975 N Orange Blossom Trail",
//         city: "Zellwood",
//         province: "FL",
//         country: "US",
//         postal_code: "32798",
//         region: "Orange",
//         full_address: '"2975 N Orange Blossom Trail", "Zellwood", "FL" "32798"',
//         national: false,
//         location_type_id: 28,
//         event_only: false,
//         fax: "",
//         hours: "Please call for hours of operation. ",
//         phone: "(407) 880-8200",
//         notes_public: " Advance Auto Parts is now collecting more than 5 million gallons of used motor oil each year and millions of batteries for recycling from its nationwide network of over 3,300 stores.",
//         url: "http://shop.advanceautoparts.com/webapp/wcs/stores/servlet/home___"
//       }
//       expect(res).toMatchObject(testObj);
//    });
  
//   });


 // })